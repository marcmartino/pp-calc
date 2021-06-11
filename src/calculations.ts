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
  ): [prestige: PrestigePoints, multipliers: PrestigeMultipliersWithValue] => {
    if (wantedMultiplier <= 0) return [prevCost, mults];
    const cheapestMult = cheapestMultiplierOption(mults);
    return minPrestigeToGetMult(
      wantedMultiplier - cheapestMult[0],
      prevCost + cheapestMult[1].cost
    )(incrementMultiplier(cheapestMult[0])(mults));
  };

export const maxMultFromPrestigePoints = (
  points: PrestigePoints,
  multipliers = initialPrestigeMultCosts
): MaxMultiplierResult => {
  const cheapest = multipliers.reduce<PrestigeMultiplierCosts | undefined>(
    (x, y) =>
      (x !== undefined && x[1].multPerPrest >= y[1].multPerPrest) ||
      y[1].cost > points
        ? x
        : y,
    undefined
  );

  if (cheapest) {
    const subsequentIteration = maxMultFromPrestigePoints(
      points - cheapest[1].cost,
      incrementMultiplier(cheapest[0])(multipliers)
    );
    return [
      {
        multiplier: cheapest[0] + subsequentIteration[0].multiplier,
        remainingPrest: subsequentIteration[0].remainingPrest,
      },
      subsequentIteration[1],
    ];
  }
  return [{ multiplier: 0, remainingPrest: points }, multipliers];
};

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
      cost: moneyPerPrestige[level] * minPrestige[0],
      multipliers: minPrestige[1],
      prestige: minPrestige[0],
    };
  };

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
