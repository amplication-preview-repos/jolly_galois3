import { Brand } from "../brand/Brand";
import { JsonValue } from "type-fest";
import { Variant } from "../variant/Variant";

export type Model = {
  brand?: Brand | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  name: string | null;
  updatedAt: Date;
  variants?: Array<Variant>;
  year: number | null;
};
