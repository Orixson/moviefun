import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DelailsScreen';
import { STARGATE_HOME, STARGATE_DETAILS } from '../routes';

const Stack = createStackNavigator();

export default StargateStack = ({ route }) => {
  return (
    <Stack.Navigator initialRouteName={STARGATE_HOME}>
      <Stack.Screen
        name={STARGATE_HOME}
        component={HomeScreen}
        options={{
          title: { STARGATE_HOME },
          headerShown: false,
        }}
        initialParams={{ url: 'stargate' }}
      />
      <Stack.Screen
        name={STARGATE_DETAILS}
        component={DetailsScreen}
        options={{
          title: { STARGATE_DETAILS },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
