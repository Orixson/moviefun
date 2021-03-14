import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import One from './src/screen1';

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
        initialParams={{ url: 'stargate' }}
      />
      <Tab.Screen
        name="Batman"
        component={One}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-add-circle" />,
        }}
        initialParams={{ url: 'batman' }}
      />
      <Tab.Screen
        name="Spiderman"
        component={One}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-add-circle" />,
        }}
        initialParams={{ url: 'spider-man' }}
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
