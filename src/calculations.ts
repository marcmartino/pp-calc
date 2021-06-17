import {
  PrestigeMultiplier,
  PrestigeMultipliersWithValue,
  PrestigeMultiplierCosts,
  multiplierIndex,
  initialPrestigeMultCosts,
  PrestigePoints,
  PrestigeLevel,
  Dollars,
  moneyPerPrestige,
  Multiplier,
} from "./constants";

export type MaxMultiplierResult = [
  result: { multiplier: Multiplier; remainingPrest: PrestigePoints },
  multipliers: PrestigeMultipliersWithValue
];

export const cheapestMultiplierOption = (
  costs: PrestigeMultipliersWithValue
): PrestigeMultiplierCosts =>
  costs.reduce((cheapest, multOption) =>
    cheapest[1].multPerPrest >= multOption[1].multPerPrest
      ? cheapest
      : multOption
  );

export const incrementMultiplier =
  (mult: PrestigeMultiplier) =>
  (costs: PrestigeMultipliersWithValue): PrestigeMultipliersWithValue => {
    const updatedCosts = [...costs];
    const prevMultVals = costs[multiplierIndex[mult]];

    const newCost =
      prevMultVals[1].cost +
      initialPrestigeMultCosts[multiplierIndex[mult]][1].cost;
    updatedCosts[multiplierIndex[mult]] = [
      prevMultVals[0],
      {
        qty: costs[multiplierIndex[mult]][1].qty + 1,
        cost: newCost,
        multPerPrest: mult / newCost,
      },
    ];

    // TODO: would be nice to avoid the typecast but this should be fine given that mult is valid
    // one day i'll learn monocle-ts :\
    return updatedCosts as PrestigeMultipliersWithValue;
  };

export const minPrestigeToGetMult =
  (wantedMultiplier: Multiplier, prevCost = 0) =>
  (
    mults = initialPrestigeMultCosts
  ): {
    prestige: PrestigePoints;
    multipliers: PrestigeMultipliersWithValue;
  } => {
    if (wantedMultiplier <= 100)
      return { prestige: prevCost, multipliers: mults };
    const cheapestMult = cheapestMultiplierOption(mults);
    return minPrestigeToGetMult(
      wantedMultiplier - cheapestMult[0],
      prevCost + cheapestMult[1].cost
    )(incrementMultiplier(cheapestMult[0])(mults));
  };

const filterMax =
  <M>(
    isValidValue: (value: M | undefined) => value is M,
    sort: (a: M, b: M) => M
  ) =>
  (values: M[]): M | undefined =>
    values.reduce<M | undefined>((a, x) => {
      return isValidValue(x) ? (isValidValue(a) ? sort(a, x) : x) : a;
    }, undefined);

const cheapestMultiplier = (maxCost: PrestigePoints) =>
  filterMax<PrestigeMultiplierCosts>(
    (v): v is PrestigeMultiplierCosts =>
      v !== undefined && v[1].cost <= maxCost,
    (a, x) => (a[1].multPerPrest >= x[1].multPerPrest ? a : x)
  );

export const maxMultFromPrestigePoints = (
  points: PrestigePoints,
  multipliers = initialPrestigeMultCosts,
  prev: MaxMultiplierResult = [
    { multiplier: 100, remainingPrest: points },
    initialPrestigeMultCosts,
  ]
): MaxMultiplierResult => {
  const cheapest = cheapestMultiplier(points)(multipliers);

  if (cheapest) {
    const newMults = incrementMultiplier(cheapest[0])(multipliers);
    return maxMultFromPrestigePoints(points - cheapest[1].cost, newMults, [
      {
        multiplier: cheapest[0] + prev[0].multiplier,
        remainingPrest: points - cheapest[1].cost,
      },
      newMults,
    ]);
  }
  return prev;
};

// export const maxMultFromPrestigePoints = (
//   points: PrestigePoints,
//   multipliers = initialPrestigeMultCosts
// ): MaxMultiplierResult => {
//   const cheapest = cheapestMultiplier(points)(multipliers);

//   if (cheapest) {
//     const subsequentIteration = maxMultFromPrestigePoints(
//       points - cheapest[1].cost,
//       incrementMultiplier(cheapest[0])(multipliers)
//     );
//     return [
//       {
//         multiplier: cheapest[0] + subsequentIteration[0].multiplier,
//         remainingPrest: subsequentIteration[0].remainingPrest,
//       },
//       subsequentIteration[1],
//     ];
//   }
//   return [{ multiplier: 100, remainingPrest: points }, multipliers];
// };

export const dollarsNeededForMult =
  (level: PrestigeLevel) =>
  (
    wantedMultiplier: number
  ): {
    cost: Dollars;
    multipliers: PrestigeMultipliersWithValue;
    prestige: PrestigePoints;
  } => {
    const minPrestige = minPrestigeToGetMult(wantedMultiplier)(
      initialPrestigeMultCosts
    );
    return {
      cost: moneyPerPrestige[level] * minPrestige.prestige,
      multipliers: minPrestige.multipliers,
      prestige: minPrestige.prestige,
    };
  };

export const coinsForPrestige = (pp: PrestigePoints): number =>
  pp.toString().length * pp.toString().length;
export const briefcasesForPrestige = (pp: PrestigePoints): number =>
  pp.toString().length - 1;

// TODO: come back to address the perf issues here
// export const maxMultFromPrestigePoints = (
//   points: PrestigePoints,
//   multipliers = initialPrestigeMultCosts
// ): [
//   result: { multiplier: Multiplier; remainingPrest: PrestigePoints },
//   multipliers: PrestigeMultipliersWithValue
// ] =>
//   pipe(
//     multipliers,
//     A.filter(([_, { cost }]) => points >= cost),
//     NEA.fromArray,
//     O.chain((neMultipliers) => {
//       const initialMult = NEA.head(neMultipliers);
//       return pipe(
//         neMultipliers,
//         NEA.tail,
//         NEA.fromArray,
//         O.match(
//           () => O.some(initialMult),
//           (otherMults) =>
//             O.some(
//               NEA.reduce(initialMult, Ord.max(ordMultiplierCost))(otherMults)
//             )
//         )
//       );
//     }),
//     O.match(
//       () => [{ multiplier: 0, remainingPrest: points }, multipliers],
//       (cheapestMult) => {
//         const subsequentIteration = maxMultFromPrestigePoints(
//           points - cheapestMult[1].cost,
//           incrementMultiplier(cheapestMult[0])(multipliers)
//         );
//         return [
//           {
//             multiplier: cheapestMult[0] + subsequentIteration[0].multiplier,
//             remainingPrest: subsequentIteration[0].remainingPrest,
//           },
//           subsequentIteration[1],
//         ];
//       }
//     )
//   );
