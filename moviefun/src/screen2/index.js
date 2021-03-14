import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DelailsScreen';
import { BATMAN_HOME, BATMAN_DETAILS } from '../routes';

const Stack = createStackNavigator();

export default StargateStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={BATMAN_HOME} component={HomeScreen} />
    <Stack.Screen name={BATMAN_DETAILS} component={DetailsScreen} />
  </Stack.Navigator>
);
