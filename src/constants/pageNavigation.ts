import { Charts } from "../components/Charts";
import { MaxMultiplierForm } from "../components/MaxMultiplierForm";
import { RequiredPPForm } from "../components/RequiredPPForm";

export const pages = {
  maxMultiplier: {
    title: "Max Multiplier",
    route: "/maxMult/:pp",
    emptyRoute: "/maxMult",
    Component: MaxMultiplierForm,
  },
  RequiredPPForm: {
    title: "Required PP",
    route: "/requiredPP/:mult/level/:lvl",
    emptyRoute: "/requiredPP",
    Component: RequiredPPForm,
  },
  //   charts: {
  //     title: "Charts",
  //     route: "/charts",
  //     emptyRoute: "/charts",
  //     Component: Charts,
  //   },
} as const;

export type PageKey = keyof typeof pages;
