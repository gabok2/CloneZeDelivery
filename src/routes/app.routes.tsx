import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Detalhes } from '../screens/Detalhes';
import { ItensSacola } from '../screens/ItensSacola';

import { Header } from '../components/Header';
import { Buscar } from '../screens/Buscar';
import { Cupons } from '../screens/Cupons';
import { Pedidos } from '../screens/Pedidos';
import { Perfil } from '../screens/Perfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        options={{

          header: () => <Header />,
        }}
        name="TabHome"
        component={Home}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
      />
      <Tab.Screen
        name="Cupons"
        component={Cupons}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: 'transparent',
        },

      }}
    >
      <Stack.Screen options={{ headerShown: false, }} name="Home" component={TabNavigator} />

      <Stack.Screen options={{
        headerShown: false,
      }} name="Detalhes" component={Detalhes} />

      <Stack.Screen options={{
        headerShown: false,
      }} name="ItensSacola" component={ItensSacola} />
    </Stack.Navigator>
  );
}
