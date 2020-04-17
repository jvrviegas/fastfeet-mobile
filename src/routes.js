import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useSelector } from 'react-redux';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import OrderDetails from './pages/OrderDetails';
import ReportProblem from './pages/ReportProblem';
import ViewProblem from './pages/ViewProblem';
import ConfirmDelivery from './pages/ConfirmDelivery';
import Profile from './pages/Profile';

const SignInStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: '#7D40E7',
  inactiveTintColor: '#999',
  size: 24,
  labelStyle: {
    fontSize: 14,
    marginBottom: 10,
  },
  style: {
    height: 70,
  },
};

function OrdersStackScreen() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="Deliveries"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <OrdersStack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{
          headerTitle: 'Detalhes da entrega',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <OrdersStack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{
          headerTitle: 'Informar problema',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <OrdersStack.Screen
        name="ViewProblem"
        component={ViewProblem}
        options={{
          headerTitle: 'Visualizar problemas',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <OrdersStack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          headerTitle: 'Confirmar entrega',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </OrdersStack.Navigator>
  );
}

function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <BottomTab.Navigator tabBarOptions={tabBarOptions}>
          <BottomTab.Screen
            name="Dashboard"
            component={OrdersStackScreen}
            options={Dashboard.navigationOptions}
          />

          <BottomTab.Screen
            name="Profile"
            component={Profile}
            options={Profile.navigationOptions}
          />
        </BottomTab.Navigator>
      ) : (
        <SignInStack.Navigator>
          <SignInStack.Screen
            name="Main"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </SignInStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
