import * as React from "react";
import { FC, useState } from "react";
import {
  dollarsNeededForMult,
  maxMultFromPrestigePoints,
  minPrestigeToGetMult,
} from "../calculations";
import { BALANCE, MULTIPLIER, PRESTIGE } from "../constants/emojis";
import { PrestigeMultiplierCard } from "./PrestigeMultiplierCard";
import { useParams } from "react-router-dom";
import {
  moneyPerPrestige,
  PrestigeLevel,
  PrestigeMultipliersWithValue,
  PrestigePoints,
} from "../constants";

interface Props {}

const reshapedMinPrestigeToGetMult = (
  mult: number
): {
  prestige: PrestigePoints;
  multipliers: PrestigeMultipliersWithValue;
  cost: undefined;
} => {
  const [prestige, multipliers] = minPrestigeToGetMult(mult)();
  return { prestige, multipliers, cost: undefined };
};

export const RequiredPPForm: FC<Props> = ({}) => {
  // @ts-ignore react router types are caca
  const { mult, lvl }: unknown = useParams();
  const [goalMultiplier, setGoalMultiplier] = useState<number>(
    typeof mult === "string" && !isNaN(Number(mult)) && Number(mult) > 0
      ? Number(mult)
      : 0
  );

  const [currentLevel, setCurrentLevel] = useState<number | undefined>(
    typeof lvl === "string" && !isNaN(Number(lvl)) && Number(lvl) > 0
      ? Number(lvl)
      : undefined
  );

  // const [prestige, multipliers] = minPrestigeToGetMult(goalMultiplier * 100)();

  const { prestige, multipliers, cost } = currentLevel
    ? dollarsNeededForMult(currentLevel as PrestigeLevel)(goalMultiplier * 100)
    : reshapedMinPrestigeToGetMult(goalMultiplier * 100);

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
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">{MULTIPLIER}</span>
                </div>
                <input
                  type="text"
                  name="startingPrestige"
                  id="startingPrestige"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-md border-gray-300 rounded-md"
                  placeholder="0"
                  value={goalMultiplier}
                  onChange={(e) => {
                    const userNum = Number(e.target.value);
                    !isNaN(userNum) &&
                      userNum > -1 &&
                      setGoalMultiplier(Number(e.target.value));
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
                    className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
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
          {cost && currentLevel && (
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
