import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type CarSpecificationWhereInput = {
  feature?: StringNullableFilter;
  id?: StringFilter;
  value?: StringNullableFilter;
  variant?: VariantWhereUniqueInput;
};
