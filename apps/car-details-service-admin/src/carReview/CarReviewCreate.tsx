import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VariantTitle } from "../variant/VariantTitle";

export const CarReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <NumberInput step={1} label="Rating" source="rating" />
        <TextInput label="User" source="user" />
        <ReferenceInput source="variant.id" reference="Variant" label="Variant">
          <SelectInput optionText={VariantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
