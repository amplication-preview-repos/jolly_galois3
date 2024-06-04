import * as graphql from "@nestjs/graphql";
import { CarReviewResolverBase } from "./base/carReview.resolver.base";
import { CarReview } from "./base/CarReview";
import { CarReviewService } from "./carReview.service";

@graphql.Resolver(() => CarReview)
export class CarReviewResolver extends CarReviewResolverBase {
  constructor(protected readonly service: CarReviewService) {
    super(service);
  }
}
