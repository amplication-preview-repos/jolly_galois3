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
import { BrandService } from "../brand.service";
import { BrandCreateInput } from "./BrandCreateInput";
import { Brand } from "./Brand";
import { BrandFindManyArgs } from "./BrandFindManyArgs";
import { BrandWhereUniqueInput } from "./BrandWhereUniqueInput";
import { BrandUpdateInput } from "./BrandUpdateInput";
import { ModelFindManyArgs } from "../../model/base/ModelFindManyArgs";
import { Model } from "../../model/base/Model";
import { ModelWhereUniqueInput } from "../../model/base/ModelWhereUniqueInput";

export class BrandControllerBase {
  constructor(protected readonly service: BrandService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Brand })
  async createBrand(@common.Body() data: BrandCreateInput): Promise<Brand> {
    return await this.service.createBrand({
      data: data,
      select: {
        country: true,
        createdAt: true,
        id: true,
        logo: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Brand] })
  @ApiNestedQuery(BrandFindManyArgs)
  async brands(@common.Req() request: Request): Promise<Brand[]> {
    const args = plainToClass(BrandFindManyArgs, request.query);
    return this.service.brands({
      ...args,
      select: {
        country: true,
        createdAt: true,
        id: true,
        logo: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Brand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async brand(
    @common.Param() params: BrandWhereUniqueInput
  ): Promise<Brand | null> {
    const result = await this.service.brand({
      where: params,
      select: {
        country: true,
        createdAt: true,
        id: true,
        logo: true,
        name: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Brand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBrand(
    @common.Param() params: BrandWhereUniqueInput,
    @common.Body() data: BrandUpdateInput
  ): Promise<Brand | null> {
    try {
      return await this.service.updateBrand({
        where: params,
        data: data,
        select: {
          country: true,
          createdAt: true,
          id: true,
          logo: true,
          name: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Brand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBrand(
    @common.Param() params: BrandWhereUniqueInput
  ): Promise<Brand | null> {
    try {
      return await this.service.deleteBrand({
        where: params,
        select: {
          country: true,
          createdAt: true,
          id: true,
          logo: true,
          name: true,
          updatedAt: true,
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

  @common.Get("/:id/models")
  @ApiNestedQuery(ModelFindManyArgs)
  async findModels(
    @common.Req() request: Request,
    @common.Param() params: BrandWhereUniqueInput
  ): Promise<Model[]> {
    const query = plainToClass(ModelFindManyArgs, request.query);
    const results = await this.service.findModels(params.id, {
      ...query,
      select: {
        brand: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        image: true,
        name: true,
        updatedAt: true,
        year: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/models")
  async connectModels(
    @common.Param() params: BrandWhereUniqueInput,
    @common.Body() body: ModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      models: {
        connect: body,
      },
    };
    await this.service.updateBrand({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/models")
  async updateModels(
    @common.Param() params: BrandWhereUniqueInput,
    @common.Body() body: ModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      models: {
        set: body,
      },
    };
    await this.service.updateBrand({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/models")
  async disconnectModels(
    @common.Param() params: BrandWhereUniqueInput,
    @common.Body() body: ModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      models: {
        disconnect: body,
      },
    };
    await this.service.updateBrand({
      where: params,
      data,
      select: { id: true },
    });
  }
}
