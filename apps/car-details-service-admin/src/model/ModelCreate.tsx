import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";
import { VariantTitle } from "../variant/VariantTitle";

export const ModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="brand.id" reference="Brand" label="Brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="variants"
          reference="Variant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VariantTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
