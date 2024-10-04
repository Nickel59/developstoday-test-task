import type { Manufacturer, SearchResults } from "@/core-types";

export function getSupportedYears(furthestYear: number) {
  const currentYear = new Date().getFullYear();
  return Array.from(
    new Array(currentYear - furthestYear + 1),
    (_, i) => currentYear - i,
  );
}

export async function fetchManufacturers() {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
    );
    if (!response.ok) {
      throw new Error();
    }
    const data = (await response.json()) as SearchResults<Manufacturer>;
    return data.Results;
  } catch {
    return [];
  }
}

export const furthestYear = 2015;
