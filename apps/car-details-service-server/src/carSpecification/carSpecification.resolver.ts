import * as graphql from "@nestjs/graphql";
import { CarSpecificationResolverBase } from "./base/carSpecification.resolver.base";
import { CarSpecification } from "./base/CarSpecification";
import { CarSpecificationService } from "./carSpecification.service";

@graphql.Resolver(() => CarSpecification)
export class CarSpecificationResolver extends CarSpecificationResolverBase {
  constructor(protected readonly service: CarSpecificationService) {
    super(service);
  }
}
