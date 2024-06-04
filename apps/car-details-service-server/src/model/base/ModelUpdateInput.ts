/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BrandWhereUniqueInput } from "../../brand/base/BrandWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { VariantUpdateManyWithoutModelsInput } from "./VariantUpdateManyWithoutModelsInput";

@InputType()
class ModelUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BrandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BrandWhereUniqueInput)
  @IsOptional()
  @Field(() => BrandWhereUniqueInput, {
    nullable: true,
  })
  brand?: BrandWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  image?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => VariantUpdateManyWithoutModelsInput,
  })
  @ValidateNested()
  @Type(() => VariantUpdateManyWithoutModelsInput)
  @IsOptional()
  @Field(() => VariantUpdateManyWithoutModelsInput, {
    nullable: true,
  })
  variants?: VariantUpdateManyWithoutModelsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  year?: number | null;
}

export { ModelUpdateInput as ModelUpdateInput };
