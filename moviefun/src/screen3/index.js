import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DelailsScreen';
import StargateHomeScreen from '../screen1/HomeScreen';
import { SPIDER_HOME, SPIDER_DETAILS, STARGATE_HOME } from '../routes';

const Stack = createStackNavigator();

export default SpidermanStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={SPIDER_HOME} component={HomeScreen} />
    <Stack.Screen name={SPIDER_DETAILS} component={DetailsScreen} />
    <Stack.Screen name={STARGATE_HOME} component={StargateHomeScreen} />
  </Stack.Navigator>
);
