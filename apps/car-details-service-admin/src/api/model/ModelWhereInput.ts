import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VariantListRelationFilter } from "../variant/VariantListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ModelWhereInput = {
  brand?: BrandWhereUniqueInput;
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
  variants?: VariantListRelationFilter;
  year?: IntNullableFilter;
};
