import { CarReviewListRelationFilter } from "../carReview/CarReviewListRelationFilter";
import { CarSpecificationListRelationFilter } from "../carSpecification/CarSpecificationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type VariantWhereInput = {
  carReviews?: CarReviewListRelationFilter;
  carSpecifications?: CarSpecificationListRelationFilter;
  fuelType?: "Option1";
  id?: StringFilter;
  model?: ModelWhereUniqueInput;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
