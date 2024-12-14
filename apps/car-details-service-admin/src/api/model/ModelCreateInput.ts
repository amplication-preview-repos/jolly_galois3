import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { VariantCreateNestedManyWithoutModelsInput } from "./VariantCreateNestedManyWithoutModelsInput";

export type ModelCreateInput = {
  brand?: BrandWhereUniqueInput | null;
  image?: InputJsonValue;
  name?: string | null;
  variants?: VariantCreateNestedManyWithoutModelsInput;
  year?: number | null;
};
