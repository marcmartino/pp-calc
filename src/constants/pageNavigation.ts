export const pages = {
  maxMultiplier: {
    title: "Max Multiplier",
    hash: "maxMult",
  },
  ppToMultiplier: {
    title: "PP Needed for Multiplier",
    hash: "ppToMult",
  },
  cashToMultiplier: {
    title: "Cash Needed for Multiplier",
    hash: "cashToMult",
  },
  charts: {
    title: "Charts",
    hash: "charts",
  },
} as const;

export type PageKey = keyof typeof pages;
