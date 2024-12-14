import { Module } from "@nestjs/common";
import { CarSpecificationModuleBase } from "./base/carSpecification.module.base";
import { CarSpecificationService } from "./carSpecification.service";
import { CarSpecificationController } from "./carSpecification.controller";
import { CarSpecificationResolver } from "./carSpecification.resolver";

@Module({
  imports: [CarSpecificationModuleBase],
  controllers: [CarSpecificationController],
  providers: [CarSpecificationService, CarSpecificationResolver],
  exports: [CarSpecificationService],
})
export class CarSpecificationModule {}
