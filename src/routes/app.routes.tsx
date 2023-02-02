import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Octicons, Foundation, AntDesign } from '@expo/vector-icons';
import { Home } from '../screens/Home';
import { Detalhes } from '../screens/Detalhes';
import { ItensSacola } from '../screens/ItensSacola';

import { Header } from '../components/Header';
import { Buscar } from '../screens/Buscar';
import { Cupons } from '../screens/Cupons';
import { Pedidos } from '../screens/Pedidos';
import { Perfil } from '../screens/Perfil';
import { Sacola } from '../screens/Sacola';
import { UserCircle } from 'phosphor-react-native';
import { View, Text } from 'react-native';
import { useCart } from '../hooks/useCart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          height: 48,
          paddingBottom: 5,
          paddingTop: 1,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',


      })}

    >
      <Tab.Screen
        options={{

          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 2 : 0,
                borderColor: '#FFCC00',


              }}
            >
              <Text style={{ fontSize: 12 }}>
                Início
              </Text>
            </View>
          ),


          header: () => <Header />,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Foundation name="home" size={23} color={color} />

            }
            return <Octicons name="home" size={22} color={color} />
          }

        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'BUSCAR ITENS',
          headerTitleStyle: {
            color: '#000',
            fontSize: 15
          },
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 2 : 0,
                borderColor: '#FFCC00',


              }}
            >
              <Text style={{ fontSize: 12 }}>
                Busca
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <AntDesign name="search1" size={20} color={color} />

            }
            return <AntDesign name="search1" size={20} color={color} />
          }

        }}
      />
      <Tab.Screen
        name="Cupons"
        component={Cupons}
        options={{
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 2 : 0,
                borderColor: '#FFCC00',


              }}
            >
              <Text style={{ fontSize: 11 }}>
                Cupons
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <MaterialCommunityIcons name="ticket-percent" size={25} color={color} />

            }
            return <MaterialCommunityIcons name="ticket-percent-outline" size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 2 : 0,
                borderColor: '#FFCC00',


              }}
            >
              <Text style={{ fontSize: 11 }}>
                Pedidos
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <AntDesign name="profile" size={25} color={color} />

            }
            return <AntDesign name="profile" size={25} color={color} />
          }
        }}

      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{

          tabBarLabel: ({ focused }) => (
            <View
              style={{
                borderBottomWidth: focused ? 2 : 0,
                borderColor: '#FFCC00',


              }}
            >
              <Text style={{ fontSize: 11 }}>
                Perfil
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <UserCircle size={25} color={color} weight="fill" />

            }
            return <UserCircle size={25} color={color} weight="regular" />
          }

        }}
      />
    </Tab.Navigator>
  );
}

export const AppRoutes = () => {
  const { sacola } = useCart();
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: 'transparent',
        },

      }}
    >
      <Stack.Screen options={{ headerShown: false, }} name="hHome" component={TabNavigator} />

      <Stack.Screen options={{
        headerShown: false,
      }} name="Detalhes" component={Detalhes} />

      <Stack.Screen options={{
        headerShown: false,
      }} name="ItensSacola" component={ItensSacola} />

      <Stack.Screen options={{
        headerShown: sacola.length > 0,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#000',
          fontSize: 18
        },



      }} name="Sacola" component={Sacola} />
    </Stack.Navigator>
  );
}
