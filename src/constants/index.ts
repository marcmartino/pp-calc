export const prestigeLevels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
] as const;

export const moneyPerPrestige: Record<PrestigeLevel, Dollars> = {
  1: 12_000,
  2: 56_000,
  3: 144_000,
  4: 288_000,
  5: 500_000,
  6: 792_000,
  7: 1_176_000,
  8: 1_664_000,
  9: 2_268_000,
  10: 3_000_000,
  11: 3_872_000,
  12: 4_896_000,
  13: 6_084_000,
  14: 7_448_000,
  15: 9_000_000,
  16: 10_752_000,
  17: 12_716_000,
  18: 14_904_000,
  19: 17_328_000,
  20: 20_000_000,
  21: 22_932_000,
  22: 26_136_000,
  23: 29_624_000,
  24: 33_408_000,
  25: 37_500_000,
  26: 41_912_000,
  27: 46_656_000,
  28: 51_744_000,
  29: 57_188_000,
  30: 63_000_000,
  31: 69_192_000,
  32: 75_776_000,
  33: 82_764_000,
  34: 90_168_000,
  35: 98_000_000,
  36: 106_272_000,
  37: 114_996_000,
  38: 124_184_000,
  39: 133_848_000,
  40: 144_000_000,
  41: 154_652_000,
  42: 165_816_000,
  43: 177_504_000,
  44: 189_728_000,
  45: 202_500_000,
  46: 215_832_000,
  47: 229_736_000,
  48: 244_224_000,
  49: 259_308_000,
  50: 275_000_000,
};

export const initialPrestigeMultCosts: PrestigeMultipliersWithValue = [
  [5, { qty: 0, cost: 10, multPerPrest: 5 / 10 }],
  [15, { qty: 0, cost: 50, multPerPrest: 15 / 50 }],
  [30, { qty: 0, cost: 250, multPerPrest: 30 / 250 }],
  [50, { qty: 0, cost: 750, multPerPrest: 50 / 750 }],
  [100, { qty: 0, cost: 2_500, multPerPrest: 100 / 2_500 }],
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
