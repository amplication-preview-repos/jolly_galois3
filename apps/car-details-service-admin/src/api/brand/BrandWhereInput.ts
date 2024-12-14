import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ModelListRelationFilter } from "../model/ModelListRelationFilter";

export type BrandWhereInput = {
  country?: StringNullableFilter;
  id?: StringFilter;
  logo?: JsonFilter;
  models?: ModelListRelationFilter;
  name?: StringNullableFilter;
};
