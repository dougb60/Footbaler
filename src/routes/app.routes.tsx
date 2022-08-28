import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import theme from '../global/styles/theme';
import Home from '../screens/Home';
import Ligas from '../screens/Leagues';
import LeagueDetails from '../screens/Leagues/Details';
import { RootStackParamList } from './routes.stack';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppStackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="League" component={Ligas} />
      <Stack.Screen name="LeagueDetails" component={LeagueDetails} />
    </Stack.Navigator>
  );
}

export function AppTabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.lightRed,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarStyle: { display: 'none' } }}
      />
      <Tab.Screen name="TabLeague" component={AppStackRoutes} />
    </Tab.Navigator>
  );
}
