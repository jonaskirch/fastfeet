import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './styles/colors';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Delivery from '~/pages/Delivery';
import NewProblem from '~/pages/NewProblem';
import Problems from '~/pages/Problems';
import DeliveryEnd from '~/pages/DeliveryEnd';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppDashboard() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerStyle: { backgroundColor: colors.primary },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={({ navigation }) => ({
          title: 'Detalhes da encomenda',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize: 16,
          },
          // headerStyle: {
          //   height: 155,
          //   backgroundColor: colors.primary,
          // },
        })}
      />
      <Stack.Screen
        name="NewProblem"
        component={NewProblem}
        options={({ navigation }) => ({
          title: 'Informar problema',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize: 16,
          },
        })}
      />
      <Stack.Screen
        name="Problems"
        component={Problems}
        options={({ navigation }) => ({
          title: 'Visualizar problemas',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize: 16,
          },
        })}
      />
      <Stack.Screen
        name="DeliveryEnd"
        component={DeliveryEnd}
        options={({ navigation }) => ({
          title: 'Confirmar entrega',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize: 16,
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default function Routes({ signed = true }) {
  return (
    <NavigationContainer>
      {signed ? (
        <>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: colors.primary,
              inactiveTintcolor: 'rgba(255,255,255,0.6)',
              keyboardHidesTabBar: true,
            }}
          >
            <Tab.Screen
              name="AppDashboard"
              component={AppDashboard}
              options={{
                tabBarLabel: 'Entregas',
                tabBarIcon: ({ color }) => (
                  <Icon name="menu" color={color} size={20} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: 'Meu perfil',
                tabBarIcon: ({ color }) => (
                  <Icon name="account-circle" color={color} size={20} />
                ),
              }}
            />
          </Tab.Navigator>
        </>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
