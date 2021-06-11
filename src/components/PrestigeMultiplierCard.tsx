import { PaperClipIcon } from "@heroicons/react/solid";
import { FC } from "react";
import { MaxMultiplierResult } from "../calculations";
import { MULTIPLIER, PRESTIGE } from "../constants/emojis";

interface Props {
  result: MaxMultiplierResult;
  startingPrest: number;
}

export const PrestigeMultiplierCard: FC<Props> = ({
  startingPrest,
  result: [{ multiplier: maxMult, remainingPrest }, multipliers],
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Prestige Multipliers
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Starting Prestige: {startingPrest}
          {PRESTIGE}
          <br />
          Remaining Prestige: {remainingPrest}
          {PRESTIGE}
          <br />
          TotalPrestige Multiplier:{" "}
          {(
            multipliers.reduce((x, [m, { qty }]) => x + m * qty, 0) * 0.01
          ).toFixed(2)}
          x {MULTIPLIER}
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
  );
};
