import { InputJsonValue } from "../../types";
import { ModelCreateNestedManyWithoutBrandsInput } from "./ModelCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  country?: string | null;
  logo?: InputJsonValue;
  models?: ModelCreateNestedManyWithoutBrandsInput;
  name?: string | null;
};
