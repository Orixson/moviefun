import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DelailsScreen';
import { STARGATE_HOME, STARGATE_DETAILS } from '../routes';

const Stack = createStackNavigator();

export default StargateStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={STARGATE_HOME} component={HomeScreen} />
    <Stack.Screen name={STARGATE_DETAILS} component={DetailsScreen} />
  </Stack.Navigator>
);
