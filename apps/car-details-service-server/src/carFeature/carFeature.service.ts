import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarFeatureServiceBase } from "./base/carFeature.service.base";

@Injectable()
export class CarFeatureService extends CarFeatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
