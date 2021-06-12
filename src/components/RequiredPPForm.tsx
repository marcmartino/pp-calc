import * as React from "react";
import { FC, useEffect, useState } from "react";
import { dollarsNeededForMult, minPrestigeToGetMult } from "../calculations";
import { BALANCE, MULTIPLIER, PRESTIGE } from "../constants/emojis";
import { PrestigeMultiplierCard } from "./PrestigeMultiplierCard";
import {
  initialPrestigeMultCosts,
  moneyPerPrestige,
  PrestigeLevel,
} from "../constants";
import { routes } from "../utils/router";
import { Route } from "type-route";

interface Props {
  route: Route<typeof routes.requiredPP>;
}

export const RequiredPPForm: FC<Props> = ({ route }) => {
  const { mult, lvl } = route.params;
  const [goalMultiplier, setGoalMultiplier] = useState<number>(mult || 0);

  const [currentLevel, setCurrentLevel] = useState<number | undefined>(
    lvl || undefined
  );

  useEffect(() => {
    routes
      .requiredPP({
        ...(goalMultiplier ? { mult: goalMultiplier } : {}),
        ...(currentLevel ? { lvl: currentLevel } : {}),
      })
      .replace();
  }, [goalMultiplier, currentLevel]);

  const { prestige, multipliers, cost } =
    goalMultiplier > 1500
      ? { prestige: 0, multipliers: initialPrestigeMultCosts, cost: undefined }
      : currentLevel
      ? dollarsNeededForMult(currentLevel as PrestigeLevel)(
          goalMultiplier * 100
        )
      : { ...minPrestigeToGetMult(goalMultiplier * 100)(), cost: undefined };

  return (
    <form>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <p className="border-b border-gray-200">
            <h3>
              <label
                htmlFor="startingPrestige"
                className="block text-sm font-medium text-gray-700"
              >
                Goal Multiplier
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">{MULTIPLIER}</span>
                </div>
                <input
                  type="text"
                  name="startingPrestige"
                  id="startingPrestige"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 pl-7 pr-12 sm:text-md border-gray-300 rounded-md"
                  placeholder="Enter Multiplier"
                  value={goalMultiplier || ""}
                  onChange={(e) => {
                    const userNum = Number(e.target.value);
                    const isValidNum = !isNaN(userNum) && userNum > -1;

                    if (isValidNum) setGoalMultiplier(Number(e.target.value));
                  }}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                    level
                  </label>
                  <select
                    id="level"
                    name="level"
                    value={currentLevel}
                    onChange={(e) => {
                      const userLevel = Number(e.target.value);
                      setCurrentLevel(
                        !isNaN(userLevel) && userLevel > 0 && userLevel <= 50
                          ? userLevel
                          : undefined
                      );
                    }}
                    className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-gray border-l  bg-transparent text-gray-500 sm:text-sm rounded-md rounded-l-none"
                  >
                    <option>level</option>
                    {Object.keys(moneyPerPrestige).map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </h3>
          </p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Required Prestige: {prestige.toLocaleString()}
            {PRESTIGE}
          </p>
          {cost !== undefined && cost !== 0 && currentLevel && (
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Required Money: {cost.toLocaleString()}
              {BALANCE}
            </p>
          )}
        </div>
        <div className="border-t border-gray-200">
          <PrestigeMultiplierCard multipliers={multipliers} />
        </div>
      </div>
    </form>
  );
};
