export const prestigeLevels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
] as const;

export const moneyPerPrestige: Record<PrestigeLevel, Dollars> = {
  1: 12000,
  2: 56000,
  3: 144000,
  4: 288000,
  5: 500000,
  6: 792000,
  7: 1176000,
  8: 1664000,
  9: 2268000,
  10: 3000000,
  11: 3872000,
  12: 4896000,
  13: 6084000,
  14: 7448000,
  15: 9000000,
  16: 10752000,
  17: 12716000,
  18: 14904000,
  19: 17328000,
  20: 20000000,
  21: 22932000,
  22: 26136000,
  23: 29624000,
  24: 33408000,
  25: 37500000,
  26: 41912000,
  27: 46656000,
  28: 51744000,
  29: 57188000,
  30: 63000000,
  31: 69192000,
  32: 75776000,
  33: 82764000,
  34: 90168000,
  35: 98000000,
  36: 106272000,
  37: 114996000,
  38: 124184000,
  39: 133848000,
  40: 144000000,
  41: 154652000,
  42: 165816000,
  43: 177504000,
  44: 189728000,
  45: 202500000,
  46: 215832000,
  47: 229736000,
  48: 244224000,
  49: 259308000,
  50: 275000000,
};

export const initialPrestigeMultCosts: PrestigeMultipliersWithValue = [
  [5, { qty: 0, cost: 10, multPerPrest: 5 / 10 }],
  [15, { qty: 0, cost: 50, multPerPrest: 15 / 50 }],
  [30, { qty: 0, cost: 250, multPerPrest: 30 / 250 }],
  [50, { qty: 0, cost: 750, multPerPrest: 50 / 750 }],
  [100, { qty: 0, cost: 2500, multPerPrest: 100 / 2500 }],
];

export const multiplierIndex: Record<PrestigeMultiplier, 0 | 1 | 2 | 3 | 4> = {
  5: 0,
  15: 1,
  30: 2,
  50: 3,
  100: 4,
};

export type PrestigeMultiplierCosts<
  M extends PrestigeMultiplier = PrestigeMultiplier
> = [
  multiplier: M,
  values: { qty: number; cost: PrestigePoints; multPerPrest: Multiplier }
];

export type PrestigeMultipliersWithValue = [
  PrestigeMultiplierCosts<5>,
  PrestigeMultiplierCosts<15>,
  PrestigeMultiplierCosts<30>,
  PrestigeMultiplierCosts<50>,
  PrestigeMultiplierCosts<100>
];

export type PrestigeMultiplier = 5 | 15 | 30 | 50 | 100;

export type PrestigePoints = number;

export type Dollars = number;

export type Multiplier = number;

export type PrestigeLevel = typeof prestigeLevels[number];
