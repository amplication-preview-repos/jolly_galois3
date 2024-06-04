import { Module } from "@nestjs/common";
import { CarReviewModuleBase } from "./base/carReview.module.base";
import { CarReviewService } from "./carReview.service";
import { CarReviewController } from "./carReview.controller";
import { CarReviewResolver } from "./carReview.resolver";

@Module({
  imports: [CarReviewModuleBase],
  controllers: [CarReviewController],
  providers: [CarReviewService, CarReviewResolver],
  exports: [CarReviewService],
})
export class CarReviewModule {}
