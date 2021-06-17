export const toNumber = (x: string): number | undefined => {
  const num = Number(x.replace(/[^\d]/g, ""));
  return isNaN(num) ? undefined : num;
};
