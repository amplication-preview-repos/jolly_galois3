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
import { CarReviewWhereInput } from "./CarReviewWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CarReviewListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CarReviewWhereInput,
  })
  @ValidateNested()
  @Type(() => CarReviewWhereInput)
  @IsOptional()
  @Field(() => CarReviewWhereInput, {
    nullable: true,
  })
  every?: CarReviewWhereInput;

  @ApiProperty({
    required: false,
    type: () => CarReviewWhereInput,
  })
  @ValidateNested()
  @Type(() => CarReviewWhereInput)
  @IsOptional()
  @Field(() => CarReviewWhereInput, {
    nullable: true,
  })
  some?: CarReviewWhereInput;

  @ApiProperty({
    required: false,
    type: () => CarReviewWhereInput,
  })
  @ValidateNested()
  @Type(() => CarReviewWhereInput)
  @IsOptional()
  @Field(() => CarReviewWhereInput, {
    nullable: true,
  })
  none?: CarReviewWhereInput;
}
export { CarReviewListRelationFilter as CarReviewListRelationFilter };