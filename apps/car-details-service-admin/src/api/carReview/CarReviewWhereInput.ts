import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type CarReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  user?: StringNullableFilter;
  variant?: VariantWhereUniqueInput;
};
