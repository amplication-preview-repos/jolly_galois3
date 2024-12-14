import { CarSpecification as TCarSpecification } from "../api/carSpecification/CarSpecification";

export const CARSPECIFICATION_TITLE_FIELD = "feature";

export const CarSpecificationTitle = (record: TCarSpecification): string => {
  return record.feature?.toString() || String(record.id);
};
