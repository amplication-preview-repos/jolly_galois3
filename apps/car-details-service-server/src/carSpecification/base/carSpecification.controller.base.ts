/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CarSpecificationService } from "../carSpecification.service";
import { CarSpecificationCreateInput } from "./CarSpecificationCreateInput";
import { CarSpecification } from "./CarSpecification";
import { CarSpecificationFindManyArgs } from "./CarSpecificationFindManyArgs";
import { CarSpecificationWhereUniqueInput } from "./CarSpecificationWhereUniqueInput";
import { CarSpecificationUpdateInput } from "./CarSpecificationUpdateInput";

export class CarSpecificationControllerBase {
  constructor(protected readonly service: CarSpecificationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CarSpecification })
  async createCarSpecification(
    @common.Body() data: CarSpecificationCreateInput
  ): Promise<CarSpecification> {
    return await this.service.createCarSpecification({
      data: {
        ...data,

        variant: data.variant
          ? {
              connect: data.variant,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        feature: true,
        id: true,
        updatedAt: true,
        value: true,

        variant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CarSpecification] })
  @ApiNestedQuery(CarSpecificationFindManyArgs)
  async carSpecifications(
    @common.Req() request: Request
  ): Promise<CarSpecification[]> {
    const args = plainToClass(CarSpecificationFindManyArgs, request.query);
    return this.service.carSpecifications({
      ...args,
      select: {
        createdAt: true,
        feature: true,
        id: true,
        updatedAt: true,
        value: true,

        variant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CarSpecification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async carSpecification(
    @common.Param() params: CarSpecificationWhereUniqueInput
  ): Promise<CarSpecification | null> {
    const result = await this.service.carSpecification({
      where: params,
      select: {
        createdAt: true,
        feature: true,
        id: true,
        updatedAt: true,
        value: true,

        variant: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CarSpecification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCarSpecification(
    @common.Param() params: CarSpecificationWhereUniqueInput,
    @common.Body() data: CarSpecificationUpdateInput
  ): Promise<CarSpecification | null> {
    try {
      return await this.service.updateCarSpecification({
        where: params,
        data: {
          ...data,

          variant: data.variant
            ? {
                connect: data.variant,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          feature: true,
          id: true,
          updatedAt: true,
          value: true,

          variant: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CarSpecification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCarSpecification(
    @common.Param() params: CarSpecificationWhereUniqueInput
  ): Promise<CarSpecification | null> {
    try {
      return await this.service.deleteCarSpecification({
        where: params,
        select: {
          createdAt: true,
          feature: true,
          id: true,
          updatedAt: true,
          value: true,

          variant: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
