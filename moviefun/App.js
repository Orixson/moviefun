import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import One from './src/screen1';
import Two from './src/screen2';
import Three from './src/screen3';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Stargate"
        component={One}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-add-circle" />,
        }}
      />
      <Tab.Screen
        name="Batman"
        component={Two}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-add-circle" />,
        }}
      />
      <Tab.Screen
        name="Spiderman"
        component={Three}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-add-circle" />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
export default App;
