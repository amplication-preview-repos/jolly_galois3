import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { VARIANT_TITLE_FIELD } from "../variant/VariantTitle";

export const CarReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User" source="user" />
        <ReferenceField label="Variant" source="variant.id" reference="Variant">
          <TextField source={VARIANT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
