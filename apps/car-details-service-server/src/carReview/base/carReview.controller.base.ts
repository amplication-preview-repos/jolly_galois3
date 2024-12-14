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
import { CarReviewService } from "../carReview.service";
import { CarReviewCreateInput } from "./CarReviewCreateInput";
import { CarReview } from "./CarReview";
import { CarReviewFindManyArgs } from "./CarReviewFindManyArgs";
import { CarReviewWhereUniqueInput } from "./CarReviewWhereUniqueInput";
import { CarReviewUpdateInput } from "./CarReviewUpdateInput";

export class CarReviewControllerBase {
  constructor(protected readonly service: CarReviewService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CarReview })
  async createCarReview(
    @common.Body() data: CarReviewCreateInput
  ): Promise<CarReview> {
    return await this.service.createCarReview({
      data: {
        ...data,

        variant: data.variant
          ? {
              connect: data.variant,
            }
          : undefined,
      },
      select: {
        comment: true,
        createdAt: true,
        id: true,
        rating: true,
        updatedAt: true,
        user: true,

        variant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CarReview] })
  @ApiNestedQuery(CarReviewFindManyArgs)
  async carReviews(@common.Req() request: Request): Promise<CarReview[]> {
    const args = plainToClass(CarReviewFindManyArgs, request.query);
    return this.service.carReviews({
      ...args,
      select: {
        comment: true,
        createdAt: true,
        id: true,
        rating: true,
        updatedAt: true,
        user: true,

        variant: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CarReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async carReview(
    @common.Param() params: CarReviewWhereUniqueInput
  ): Promise<CarReview | null> {
    const result = await this.service.carReview({
      where: params,
      select: {
        comment: true,
        createdAt: true,
        id: true,
        rating: true,
        updatedAt: true,
        user: true,

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
  @swagger.ApiOkResponse({ type: CarReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCarReview(
    @common.Param() params: CarReviewWhereUniqueInput,
    @common.Body() data: CarReviewUpdateInput
  ): Promise<CarReview | null> {
    try {
      return await this.service.updateCarReview({
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
          comment: true,
          createdAt: true,
          id: true,
          rating: true,
          updatedAt: true,
          user: true,

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
  @swagger.ApiOkResponse({ type: CarReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCarReview(
    @common.Param() params: CarReviewWhereUniqueInput
  ): Promise<CarReview | null> {
    try {
      return await this.service.deleteCarReview({
        where: params,
        select: {
          comment: true,
          createdAt: true,
          id: true,
          rating: true,
          updatedAt: true,
          user: true,

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
