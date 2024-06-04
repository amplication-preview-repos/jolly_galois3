import { CarReview as TCarReview } from "../api/carReview/CarReview";

export const CARREVIEW_TITLE_FIELD = "user";

export const CarReviewTitle = (record: TCarReview): string => {
  return record.user?.toString() || String(record.id);
};
