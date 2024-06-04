import { CarSpecificationWhereInput } from "./CarSpecificationWhereInput";
import { CarSpecificationOrderByInput } from "./CarSpecificationOrderByInput";

export type CarSpecificationFindManyArgs = {
  where?: CarSpecificationWhereInput;
  orderBy?: Array<CarSpecificationOrderByInput>;
  skip?: number;
  take?: number;
};
