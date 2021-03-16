import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import StargateStack from './src/screens';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

const AppStack = () => {
  return (
    <NavigationContainer>
      <StargateStack />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
