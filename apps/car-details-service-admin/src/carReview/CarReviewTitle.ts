import { CarReview as TCarReview } from "../api/carReview/CarReview";

export const CARREVIEW_TITLE_FIELD = "id";

export const CarReviewTitle = (record: TCarReview): string => {
  return record.id?.toString() || String(record.id);
};
