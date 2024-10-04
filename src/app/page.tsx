import { MainPageSelectBox } from "@/components/main-page-select-box";
import { fetchManufacturers, furthestYear } from "@/utils";

export default async function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <MainPageSelectBox
        furthestYear={furthestYear}
        manufacturers={await fetchManufacturers()}
      />
    </div>
  );
}
