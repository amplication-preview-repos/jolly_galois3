import { SortOrder } from "../../util/SortOrder";

export type CarReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
  variantId?: SortOrder;
};
