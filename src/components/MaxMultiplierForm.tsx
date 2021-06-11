import * as React from "react";
import { FC, useState } from "react";
import { maxMultFromPrestigePoints } from "../calculations";
import { initialPrestigeMultCosts } from "../constants";
import { MULTIPLIER, PRESTIGE } from "../constants/emojis";
import { PrestigeMultiplierCard } from "./PrestigeMultiplierCard";

interface Props {}

export const MaxMultiplierForm: FC<Props> = ({}) => {
  const [startingPrestige, setStartingPrestige] = useState<number>(0);

  const [{ multiplier: maxMult, remainingPrest }, multipliers] =
    maxMultFromPrestigePoints(startingPrestige);
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
                Starting Prestige
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">{PRESTIGE}</span>
                </div>
                <input
                  type="text"
                  name="startingPrestige"
                  id="startingPrestige"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-md border-gray-300 rounded-md"
                  placeholder="0"
                  onChange={(e) => {
                    const userNum = Number(e.target.value);
                    !isNaN(userNum) &&
                      userNum > -1 &&
                      setStartingPrestige(Number(e.target.value));
                  }}
                />
              </div>
            </h3>
          </p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Remaining Prestige: {remainingPrest}
            {PRESTIGE}
            <br />
            TotalPrestige Multiplier: {(maxMult / 100).toFixed(2)}x {MULTIPLIER}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {multipliers.map(([multSize, { qty, cost }], i) => (
              <div
                className={
                  (i % 2 ? "bg-gray-50" : "bg-white") +
                  " px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                }
              >
                <dt className="text-sm font-medium text-gray-500">
                  {multSize}% Multiplier
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {qty}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </form>
  );
};
