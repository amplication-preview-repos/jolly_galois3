import * as graphql from "@nestjs/graphql";
import { CarFeatureResolverBase } from "./base/carFeature.resolver.base";
import { CarFeature } from "./base/CarFeature";
import { CarFeatureService } from "./carFeature.service";

@graphql.Resolver(() => CarFeature)
export class CarFeatureResolver extends CarFeatureResolverBase {
  constructor(protected readonly service: CarFeatureService) {
    super(service);
  }
}
