import { createRouter, defineRoute, param } from "type-route";

export const { RouteProvider, useRoute, routes } = createRouter({
  maxMultiplier: defineRoute(
    {
      pp: param.query.optional.number,
    },
    () => "/maxMult"
  ),
  requiredPP: defineRoute(
    {
      lvl: param.query.optional.number,
      mult: param.query.optional.number,
    },
    () => "/requiredPP"
  ),
});
