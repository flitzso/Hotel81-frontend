import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput, Edit } from "react-admin";

export const ClientesList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
       <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="nome" />
          <TextField source="email" />
          <TextField source="telefone" />
          <TextField source="estados" />
          <TextField source="cidade" />
          <TextField source="bairro" />
          <TextField source="rua" />
        <TextField source="numero" />
       </Datagrid>
    </List>
  );

  export const ClientesCreate = (props: ResourceComponentInjectedProps) => (
   <Create {...props}>
    <SimpleForm>

        <TextInput source="id" disabled />
        <TextInput source="nome" />
        <TextInput source="email" />
        <TextInput source="telefone" />
        <TextInput source="estados" />
        <TextInput source="cidade" />
        <TextInput source="bairro" />
        <TextInput source="rua" />
        <TextInput source="numero" />

    </SimpleForm>
  </Create>
 );

 export const ClientesEdit = (props: ResourceComponentInjectedProps) => (
  <Edit {...props}>
    <SimpleForm>

        <TextInput source="id" disabled />
        <TextInput source="nome" />
        <TextInput source="email" />
        <TextInput source="telefone" />
        <TextInput source="estados" />
        <TextInput source="cidade" />
        <TextInput source="bairro" />
        <TextInput source="rua" />
        <TextInput source="numero" />

    </SimpleForm>
  </Edit>
 );