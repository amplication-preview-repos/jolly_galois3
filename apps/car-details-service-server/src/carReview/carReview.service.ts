import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarReviewServiceBase } from "./base/carReview.service.base";

@Injectable()
export class CarReviewService extends CarReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
