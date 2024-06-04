import { CarReviewCreateNestedManyWithoutVariantsInput } from "./CarReviewCreateNestedManyWithoutVariantsInput";
import { CarSpecificationCreateNestedManyWithoutVariantsInput } from "./CarSpecificationCreateNestedManyWithoutVariantsInput";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type VariantCreateInput = {
  carReviews?: CarReviewCreateNestedManyWithoutVariantsInput;
  carSpecifications?: CarSpecificationCreateNestedManyWithoutVariantsInput;
  fuelType?: "Option1" | null;
  model?: ModelWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
