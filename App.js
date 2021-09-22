import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
