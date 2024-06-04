import { CarSpecification as TCarSpecification } from "../api/carSpecification/CarSpecification";

export const CARSPECIFICATION_TITLE_FIELD = "id";

export const CarSpecificationTitle = (record: TCarSpecification): string => {
  return record.id?.toString() || String(record.id);
};
