import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type CarReviewCreateInput = {
  comment?: string | null;
  rating?: number | null;
  user?: string | null;
  variant?: VariantWhereUniqueInput | null;
};
