import type { Model, SearchResults } from "@/core-types";
import { fetchManufacturers, furthestYear, getSupportedYears } from "@/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const supportedYears = getSupportedYears(furthestYear);
  return (await fetchManufacturers()).flatMap((manufacturer) =>
    supportedYears.map((year) => ({
      makeId: manufacturer.MakeId.toString(),
      year: year.toString(),
    })),
  );
}

export interface Props {
  params: {
    readonly makeId: string;
    readonly year: string;
  };
}

export default async function ManufacturerDetailsPage({ params }: Props) {
  let data = undefined;
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`,
    );
    data = (await response.json()) as SearchResults<Model>;
  } catch {}

  if (!data?.Results.length) {
    return notFound();
  }

  return (
    <div>
      <h1 className="flex justify-center text-lg font-bold">
        {data.Results[0].Make_Name} models in {params.year}
      </h1>
      <section>
        {data.Results.map((model) => model.Model_Name).join(", ")}
      </section>
    </div>
  );
}
