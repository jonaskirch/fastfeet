import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './styles/colors';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Delivery from '~/pages/Delivery';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppDashboard() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: colors.primary },
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Delivery" component={Delivery} />
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
                tabBarIcon: () => (
                  <Icon name="menu" color={colors.primary} size={20} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: 'Meu perfil',
                tabBarIcon: () => (
                  <Icon
                    name="account-circle"
                    color={colors.primary}
                    size={20}
                  />
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
