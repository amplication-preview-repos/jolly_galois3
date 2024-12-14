import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarReviewService } from "./carReview.service";
import { CarReviewControllerBase } from "./base/carReview.controller.base";

@swagger.ApiTags("carReviews")
@common.Controller("carReviews")
export class CarReviewController extends CarReviewControllerBase {
  constructor(protected readonly service: CarReviewService) {
    super(service);
  }
}
