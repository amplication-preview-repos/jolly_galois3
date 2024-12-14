import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarFeatureService } from "./carFeature.service";
import { CarFeatureControllerBase } from "./base/carFeature.controller.base";

@swagger.ApiTags("carFeatures")
@common.Controller("carFeatures")
export class CarFeatureController extends CarFeatureControllerBase {
  constructor(protected readonly service: CarFeatureService) {
    super(service);
  }
}
