import { CarFeatureWhereInput } from "./CarFeatureWhereInput";
import { CarFeatureOrderByInput } from "./CarFeatureOrderByInput";

export type CarFeatureFindManyArgs = {
  where?: CarFeatureWhereInput;
  orderBy?: Array<CarFeatureOrderByInput>;
  skip?: number;
  take?: number;
};
