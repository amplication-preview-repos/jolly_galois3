import { Module } from "@nestjs/common";
import { CarFeatureModuleBase } from "./base/carFeature.module.base";
import { CarFeatureService } from "./carFeature.service";
import { CarFeatureController } from "./carFeature.controller";
import { CarFeatureResolver } from "./carFeature.resolver";

@Module({
  imports: [CarFeatureModuleBase],
  controllers: [CarFeatureController],
  providers: [CarFeatureService, CarFeatureResolver],
  exports: [CarFeatureService],
})
export class CarFeatureModule {}
