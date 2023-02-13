import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from './Components/Inicio/index';
import Contatos from './Components/Contato/index';
import Produtos from './Components/Produtos/index';

const Menu = createBottomTabNavigator().Navigator;
const Itens = createBottomTabNavigator().Screen;

export default function App() {
  return (
   <NavigationContainer>
    <Menu>
      <Itens name="Início" component={Inicio}/>
    </Menu>
   </NavigationContainer>
  );
}
