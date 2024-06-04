/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Model } from "./Model";
import { ModelCountArgs } from "./ModelCountArgs";
import { ModelFindManyArgs } from "./ModelFindManyArgs";
import { ModelFindUniqueArgs } from "./ModelFindUniqueArgs";
import { DeleteModelArgs } from "./DeleteModelArgs";
import { ModelService } from "../model.service";
@graphql.Resolver(() => Model)
export class ModelResolverBase {
  constructor(protected readonly service: ModelService) {}

  async _modelsMeta(
    @graphql.Args() args: ModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Model])
  async models(@graphql.Args() args: ModelFindManyArgs): Promise<Model[]> {
    return this.service.models(args);
  }

  @graphql.Query(() => Model, { nullable: true })
  async model(
    @graphql.Args() args: ModelFindUniqueArgs
  ): Promise<Model | null> {
    const result = await this.service.model(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Model)
  async deleteModel(
    @graphql.Args() args: DeleteModelArgs
  ): Promise<Model | null> {
    try {
      return await this.service.deleteModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}