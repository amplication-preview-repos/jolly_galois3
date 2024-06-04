import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type CarSpecificationUpdateInput = {
  feature?: string | null;
  value?: string | null;
  variant?: VariantWhereUniqueInput | null;
};
