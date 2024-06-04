import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VariantTitle } from "../variant/VariantTitle";

export const CarSpecificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Feature" source="feature" />
        <TextInput label="Value" source="value" />
        <ReferenceInput source="variant.id" reference="Variant" label="Variant">
          <SelectInput optionText={VariantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
