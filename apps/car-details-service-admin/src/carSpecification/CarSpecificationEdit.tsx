import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VariantTitle } from "../variant/VariantTitle";

export const CarSpecificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Feature" source="feature" />
        <TextInput label="Value" source="value" />
        <ReferenceInput source="variant.id" reference="Variant" label="Variant">
          <SelectInput optionText={VariantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
