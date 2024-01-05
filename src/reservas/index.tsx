import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput, Edit } from "react-admin";

export const ReservasList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
       <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="cliente_id" />
          <TextField source="quarto_id" />
          <TextField source="data_entrada" />
          <TextField source="data_saida" />
          <TextField source="data_saida" />
       </Datagrid>
    </List>
  );

  export const ReservasCreate = (props: ResourceComponentInjectedProps) => (
   <Create {...props}>
      <SimpleForm>

          <TextInput source="id" disabled />
          <TextInput source="client_id" disabled />
          <TextInput source="quarto_id" disabled />
          <TextInput source="data_entrada" />
          <TextInput source="data_saida" />
          <TextInput source="status" />

      </SimpleForm>
   </Create>
 );

 export const ReservasEdit = (props: ResourceComponentInjectedProps) => (
   <Edit {...props}>
      <SimpleForm>

          <TextInput source="id" disabled />
          <TextInput source="client_id" disabled />
          <TextInput source="quarto_id" disabled />
          <TextInput source="data_entrada" />
          <TextInput source="data_saida" />
          <TextInput source="status" />

      </SimpleForm>
   </Edit>
 );