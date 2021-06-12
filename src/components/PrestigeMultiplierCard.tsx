import { FC } from "react";
import { PrestigeMultipliersWithValue } from "../constants";

interface Props {
  multipliers: PrestigeMultipliersWithValue;
}

export const PrestigeMultiplierCard: FC<Props> = ({ multipliers }) => {
  return (
    <dl>
      {multipliers.map(([multSize, { qty, cost }], i) => (
        <div
          key={`${i}-${multSize}`}
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
  );
};
