import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { VariantUpdateManyWithoutModelsInput } from "./VariantUpdateManyWithoutModelsInput";

export type ModelUpdateInput = {
  brand?: BrandWhereUniqueInput | null;
  image?: InputJsonValue;
  name?: string | null;
  variants?: VariantUpdateManyWithoutModelsInput;
  year?: number | null;
};
