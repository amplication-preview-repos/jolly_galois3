import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CarFeatureWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
