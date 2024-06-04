import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CarReviewTitle } from "../carReview/CarReviewTitle";
import { CarSpecificationTitle } from "../carSpecification/CarSpecificationTitle";
import { ModelTitle } from "../model/ModelTitle";

export const VariantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="carReviews"
          reference="CarReview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CarReviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="carSpecifications"
          reference="CarSpecification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CarSpecificationTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="fuelType"
          label="FuelType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="model.id" reference="Model" label="Model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
