import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type CarReviewUpdateInput = {
  comment?: string | null;
  rating?: number | null;
  user?: string | null;
  variant?: VariantWhereUniqueInput | null;
};
