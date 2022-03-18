import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Login, Home, Register} from '../pages';
import {BottomNavigation} from '../component';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp(params) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Home} />
    </Tab.Navigator>
  );
}

export default function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
