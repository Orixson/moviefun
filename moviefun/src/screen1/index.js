import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DelailsScreen';
import { STARGATE_HOME, STARGATE_DETAILS } from '../routes';

const Stack = createStackNavigator();

export default StargateStack = ({ route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={route.params.url.toUpperCase()}
        component={HomeScreen}
        options={{
          title: route.name.toUpperCase(),
          headerShown: false,
        }}
        initialParams={{ url: route.params.url }}
      />
      <Stack.Screen
        name={STARGATE_DETAILS}
        component={DetailsScreen}
        options={{
          title: route.name,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
