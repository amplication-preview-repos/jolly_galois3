/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ModelWhereUniqueInput } from "../../model/base/ModelWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ModelUpdateManyWithoutBrandsInput {
  @Field(() => [ModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModelWhereUniqueInput],
  })
  connect?: Array<ModelWhereUniqueInput>;

  @Field(() => [ModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModelWhereUniqueInput],
  })
  disconnect?: Array<ModelWhereUniqueInput>;

  @Field(() => [ModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModelWhereUniqueInput],
  })
  set?: Array<ModelWhereUniqueInput>;
}

export { ModelUpdateManyWithoutBrandsInput as ModelUpdateManyWithoutBrandsInput };
