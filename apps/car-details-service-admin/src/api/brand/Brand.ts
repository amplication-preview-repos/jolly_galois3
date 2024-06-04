import { JsonValue } from "type-fest";
import { Model } from "../model/Model";

export type Brand = {
  country: string | null;
  createdAt: Date;
  id: string;
  logo: JsonValue;
  models?: Array<Model>;
  name: string | null;
  updatedAt: Date;
};
