import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { UserList, UserCreate, UserEdit } from './users/index'
import { ClientesList, ClientesCreate, ClientesEdit } from './clientes/index'
import { QuartosList, QuartosCreate, QuartosEdit } from './quartos/index'
import { ReservasList, ReservasCreate, ReservasEdit } from './reservas/index'
import { authProvider } from "./authProvider";
import jsonServerProvider from 'ra-data-json-server';

const myDataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); //user e Senha: johndoe / password

export const App = () => (
  <Admin dataProvider={myDataProvider} authProvider={authProvider}>
    <Resource 
      name="users" 
      list={UserList} 
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource 
      name="clientes" 
      list={ClientesList} 
      create={ClientesCreate}
      edit={ClientesEdit}
    />
    <Resource 
      name="quartos" 
      list={QuartosList} 
      create={QuartosCreate}
      edit={QuartosEdit}
    />
    <Resource 
      name="reservas" 
      list={ReservasList} 
      create={ReservasCreate}
      edit={ReservasEdit}
    />
  </Admin>
);

