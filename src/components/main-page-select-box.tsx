"use client";

import type { Manufacturer } from "@/core-types";
import { getSupportedYears } from "@/utils";
import Link from "next/link";
import { useState } from "react";

export interface MainPageSelectBoxProps {
  readonly furthestYear: number;
  readonly manufacturers: readonly Manufacturer[];
}

export function MainPageSelectBox({
  furthestYear,
  manufacturers,
}: MainPageSelectBoxProps) {
  const [makeId, setMakeId] = useState<string | undefined>();
  const [year, setYear] = useState<string | undefined>();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-1">
          <div>Manufacturer</div>
          <select
            className="border rounded p-1"
            value={makeId}
            onChange={(e) => setMakeId(e.target.value)}
          >
            <option hidden label=" " />
            {manufacturers.map((manufacturer) => (
              <option key={manufacturer.MakeId} value={manufacturer.MakeId}>
                {manufacturer.MakeName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <div>Year</div>
          <select
            className="border rounded p-1"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option hidden label=" " />
            {getSupportedYears(furthestYear).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="px-2.5 py-1 rounded enabled:bg-black enabled:text-white disabled:text-gray-400 disabled:border disabled:border-gray-100"
        disabled={!(makeId && year)}
        type="button"
      >
        {makeId && year ? (
          <Link tabIndex={-1} href={`result/${makeId}/${year}`}>
            Next
          </Link>
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
}
