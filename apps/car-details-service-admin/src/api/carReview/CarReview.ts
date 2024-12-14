import { Variant } from "../variant/Variant";

export type CarReview = {
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  updatedAt: Date;
  user: string | null;
  variant?: Variant | null;
};
