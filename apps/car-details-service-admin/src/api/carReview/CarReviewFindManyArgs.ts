import { CarReviewWhereInput } from "./CarReviewWhereInput";
import { CarReviewOrderByInput } from "./CarReviewOrderByInput";

export type CarReviewFindManyArgs = {
  where?: CarReviewWhereInput;
  orderBy?: Array<CarReviewOrderByInput>;
  skip?: number;
  take?: number;
};
