import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarSpecificationServiceBase } from "./base/carSpecification.service.base";

@Injectable()
export class CarSpecificationService extends CarSpecificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
