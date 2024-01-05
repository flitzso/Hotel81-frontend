import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput, Edit } from "react-admin";

export const UserList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
       <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
       </Datagrid>
    </List>
  );

  export const UserCreate = (props: ResourceComponentInjectedProps) => (
   <Create {...props}>
      <SimpleForm>

         <TextInput source="id" disabled />
         <TextInput source="name" />
         <TextInput source="username" />
         <TextInput source="phone" />
         <TextInput source="email" />

      </SimpleForm>
   </Create>
 );

 export const UserEdit = (props: ResourceComponentInjectedProps) => (
   <Edit {...props}>
      <SimpleForm>

         <TextInput source="id" disabled />
         <TextInput source="name" />
         <TextInput source="username" />
         <TextInput source="phone" />
         <TextInput source="email" />

      </SimpleForm>
   </Edit>
 );