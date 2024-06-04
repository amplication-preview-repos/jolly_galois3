import { CarFeature as TCarFeature } from "../api/carFeature/CarFeature";

export const CARFEATURE_TITLE_FIELD = "id";

export const CarFeatureTitle = (record: TCarFeature): string => {
  return record.id?.toString() || String(record.id);
};
