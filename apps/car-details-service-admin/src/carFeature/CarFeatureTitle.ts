import { CarFeature as TCarFeature } from "../api/carFeature/CarFeature";

export const CARFEATURE_TITLE_FIELD = "name";

export const CarFeatureTitle = (record: TCarFeature): string => {
  return record.name?.toString() || String(record.id);
};
