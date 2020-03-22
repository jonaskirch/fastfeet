import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
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
        header: ({ scene }) => {
          const { title } = scene.descriptor.options;
          return <Header title={title} />;
        },
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
        options={{
          title: 'Detalhes da encomenda',
        }}
      />
      <Stack.Screen
        name="NewProblem"
        component={NewProblem}
        options={{
          title: 'Informar problema',
        }}
      />
      <Stack.Screen
        name="Problems"
        component={Problems}
        options={{
          title: 'Visualizar problemas',
        }}
      />
      <Stack.Screen
        name="DeliveryEnd"
        component={DeliveryEnd}
        options={{
          title: 'Confirmar entrega',
        }}
      />
    </Stack.Navigator>
  );
}

export default function Routes({ signed }) {
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

Routes.propTypes = {
  signed: PropTypes.bool.isRequired,
};
