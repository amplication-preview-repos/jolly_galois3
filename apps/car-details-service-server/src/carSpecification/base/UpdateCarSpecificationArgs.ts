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
import { CarSpecificationWhereUniqueInput } from "./CarSpecificationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CarSpecificationUpdateInput } from "./CarSpecificationUpdateInput";

@ArgsType()
class UpdateCarSpecificationArgs {
  @ApiProperty({
    required: true,
    type: () => CarSpecificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarSpecificationWhereUniqueInput)
  @Field(() => CarSpecificationWhereUniqueInput, { nullable: false })
  where!: CarSpecificationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CarSpecificationUpdateInput,
  })
  @ValidateNested()
  @Type(() => CarSpecificationUpdateInput)
  @Field(() => CarSpecificationUpdateInput, { nullable: false })
  data!: CarSpecificationUpdateInput;
}

export { UpdateCarSpecificationArgs as UpdateCarSpecificationArgs };