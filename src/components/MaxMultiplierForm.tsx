import * as React from "react";
import { FC, useEffect, useState } from "react";
import { Route } from "type-route";
import {
  briefcasesForPrestige,
  coinsForPrestige,
  maxMultFromPrestigePoints,
} from "../calculations";
import { BRIEFCASE, COIN, MULTIPLIER, PRESTIGE } from "../constants/emojis";
import { routes } from "../utils/router";
import { toNumber } from "../utils/toNumber";
import { PrestigeMultiplierCard } from "./PrestigeMultiplierCard";

interface Props {
  route?: Route<typeof routes.maxMultiplier>;
}

export const MaxMultiplierForm: FC<Props> = ({ route }) => {
  const urlPP = route?.params.pp;
  const [startingPrestige, setStartingPrestige] = useState<number>(urlPP || 0);

  useEffect(() => {
    routes.maxMultiplier({ pp: startingPrestige }).replace();
  }, [startingPrestige]);

  const [{ multiplier: maxMult, remainingPrest }, multipliers] =
    maxMultFromPrestigePoints(
      startingPrestige <= 300_000_000 ? startingPrestige : 0
    );

  console.table(multipliers.map(([m, v]) => ({ ...v, m: m })));

  return (
    <form>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-4">
          <div className="border-b border-gray-200">
            <h3>
              <label
                htmlFor="startingPrestige"
                className="block text-sm font-medium text-gray-700"
              >
                Starting Prestige
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">{PRESTIGE}</span>
                </div>
                <input
                  type="text"
                  name="startingPrestige"
                  id="startingPrestige"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 pl-7 pr-12 sm:text-md border-gray-300 rounded-md"
                  placeholder="Enter Prestige"
                  value={startingPrestige || ""}
                  onChange={(e) => {
                    const userNum = toNumber(e.target.value);
                    userNum && setStartingPrestige(userNum);
                  }}
                />
              </div>
            </h3>
          </div>
          <div className="mt-1 max-w-2xl text-sm text-gray-500">
            <div className={"flex flex-row justify-between"}>
              <span>
                Remaining Prestige: {remainingPrest.toLocaleString()}
                {PRESTIGE}
              </span>
              {startingPrestige > 0 && (
                <span>
                  {coinsForPrestige(startingPrestige)}
                  {COIN}
                </span>
              )}
            </div>
            <div className={"flex flex-row justify-between"}>
              <span>
                TotalPrestige Multiplier: {(maxMult / 100).toFixed(2)}x
                {MULTIPLIER}
              </span>
              {startingPrestige > 0 && (
                <span>
                  {briefcasesForPrestige(startingPrestige)}
                  {BRIEFCASE}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <PrestigeMultiplierCard multipliers={multipliers} />
        </div>
      </div>
    </form>
  );
};
