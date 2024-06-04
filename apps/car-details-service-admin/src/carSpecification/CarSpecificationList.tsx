import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VARIANT_TITLE_FIELD } from "../variant/VariantTitle";

export const CarSpecificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CarSpecifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Feature" source="feature" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
        <ReferenceField label="Variant" source="variant.id" reference="Variant">
          <TextField source={VARIANT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
