import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarSpecificationService } from "./carSpecification.service";
import { CarSpecificationControllerBase } from "./base/carSpecification.controller.base";

@swagger.ApiTags("carSpecifications")
@common.Controller("carSpecifications")
export class CarSpecificationController extends CarSpecificationControllerBase {
  constructor(protected readonly service: CarSpecificationService) {
    super(service);
  }
}
