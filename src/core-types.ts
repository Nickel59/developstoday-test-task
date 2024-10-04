export type Manufacturer = {
  readonly MakeId: number;
  readonly MakeName: string;
  readonly VehicleTypeId: number;
  readonly VehicleTypeName: string;
};

export type Model = {
  readonly Make_ID: number;
  readonly Make_Name: string;
  readonly Model_ID: number;
  readonly Model_Name: string;
};

export type SearchResults<T> = {
  readonly Count: number;
  readonly Message: string;
  readonly SearchCriteria: string;
  readonly Results: readonly T[];
};
