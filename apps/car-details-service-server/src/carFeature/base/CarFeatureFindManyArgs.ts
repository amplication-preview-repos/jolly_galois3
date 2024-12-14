/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarFeatureWhereInput } from "./CarFeatureWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CarFeatureOrderByInput } from "./CarFeatureOrderByInput";

@ArgsType()
class CarFeatureFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CarFeatureWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CarFeatureWhereInput, { nullable: true })
  @Type(() => CarFeatureWhereInput)
  where?: CarFeatureWhereInput;

  @ApiProperty({
    required: false,
    type: [CarFeatureOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CarFeatureOrderByInput], { nullable: true })
  @Type(() => CarFeatureOrderByInput)
  orderBy?: Array<CarFeatureOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CarFeatureFindManyArgs as CarFeatureFindManyArgs };
