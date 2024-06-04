/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CarReviewWhereUniqueInput } from "../../carReview/base/CarReviewWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CarReviewUpdateManyWithoutVariantsInput {
  @Field(() => [CarReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CarReviewWhereUniqueInput],
  })
  connect?: Array<CarReviewWhereUniqueInput>;

  @Field(() => [CarReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CarReviewWhereUniqueInput],
  })
  disconnect?: Array<CarReviewWhereUniqueInput>;

  @Field(() => [CarReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CarReviewWhereUniqueInput],
  })
  set?: Array<CarReviewWhereUniqueInput>;
}

export { CarReviewUpdateManyWithoutVariantsInput as CarReviewUpdateManyWithoutVariantsInput };
