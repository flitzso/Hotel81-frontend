import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput, Edit } from "react-admin";

export const QuartosList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
       <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="numero_quarto" />
          <TextField source="tipo" />
          <TextField source="descricao" />
          <TextField source="preco_diaria" />
       </Datagrid>
    </List>
  );

  export const QuartosCreate = (props: ResourceComponentInjectedProps) => (
   <Create {...props}>
      <SimpleForm>

         <TextInput source="id" disabled />
         <TextInput source="numero_quarto" />
         <TextInput source="tipo" />
         <TextInput source="descricao" />
         <TextInput source="preco_diaria" />

      </SimpleForm>
   </Create>
 );

 export const QuartosEdit = (props: ResourceComponentInjectedProps) => (
   <Edit {...props}>
      <SimpleForm>

         <TextInput source="id" disabled />
         <TextInput source="numero_quarto" />
         <TextInput source="tipo" />
         <TextInput source="descricao" />
         <TextInput source="preco_diaria" />

      </SimpleForm>
   </Edit>
 );