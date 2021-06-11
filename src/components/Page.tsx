import React from "react";
import { useRoute } from "../utils/router";
import { MaxMultiplierForm } from "./MaxMultiplierForm";
import { RequiredPPForm } from "./RequiredPPForm";

export const Page = () => {
  const route = useRoute();

  return (
    <>
      {route.name === "maxMultiplier" && <MaxMultiplierForm route={route} />}
      {route.name === "requiredPP" && <RequiredPPForm route={route} />}
      {route.name === false && <MaxMultiplierForm />}
    </>
  );
};
