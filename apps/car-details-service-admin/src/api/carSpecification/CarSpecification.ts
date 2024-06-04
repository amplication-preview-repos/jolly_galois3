import { Variant } from "../variant/Variant";

export type CarSpecification = {
  createdAt: Date;
  feature: string | null;
  id: string;
  updatedAt: Date;
  value: string | null;
  variant?: Variant | null;
};
