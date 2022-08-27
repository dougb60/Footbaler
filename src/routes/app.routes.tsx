import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { RootStackParamList } from './routes.stack';
import theme from '../global/styles/theme';

import Home from '../screens/Home';
import Ligas from '../screens/Ligas';

const Tab = createBottomTabNavigator<RootStackParamList>();

export function AppRoutes() {
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
      <Tab.Screen name="Ligas" component={Ligas} />
    </Tab.Navigator>
  );
}
