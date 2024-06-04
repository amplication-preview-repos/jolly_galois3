import { CarReviewUpdateManyWithoutVariantsInput } from "./CarReviewUpdateManyWithoutVariantsInput";
import { CarSpecificationUpdateManyWithoutVariantsInput } from "./CarSpecificationUpdateManyWithoutVariantsInput";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type VariantUpdateInput = {
  carReviews?: CarReviewUpdateManyWithoutVariantsInput;
  carSpecifications?: CarSpecificationUpdateManyWithoutVariantsInput;
  fuelType?: "Option1" | null;
  model?: ModelWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
