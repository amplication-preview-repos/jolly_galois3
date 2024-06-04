import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type CarSpecificationCreateInput = {
  feature?: string | null;
  value?: string | null;
  variant?: VariantWhereUniqueInput | null;
};
