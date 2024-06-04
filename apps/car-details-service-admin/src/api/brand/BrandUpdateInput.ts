import { InputJsonValue } from "../../types";
import { ModelUpdateManyWithoutBrandsInput } from "./ModelUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  country?: string | null;
  logo?: InputJsonValue;
  models?: ModelUpdateManyWithoutBrandsInput;
  name?: string | null;
};
