import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MODEL_TITLE_FIELD } from "./ModelTitle";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";

export const ModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Brand" source="brand.id" reference="Brand">
          <TextField source={BRAND_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
        <ReferenceManyField
          reference="Variant"
          target="modelId"
          label="Variants"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="FuelType" source="fuelType" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Model" source="model.id" reference="Model">
              <TextField source={MODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
