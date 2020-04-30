import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/components/screens/Main';
import CountryList from './src/components/screens/CountryList';
import Country from './src/components/screens/Country';

import configureStore from './src/redux/reducers/configureStore';
import {Provider} from 'react-redux';

import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  const Stack = createStackNavigator();
  const store = configureStore();

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="main" component={Main} />
            <Stack.Screen name="countryList" component={CountryList} />
            <Stack.Screen name="country" component={Country} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
