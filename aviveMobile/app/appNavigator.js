import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './views/HomeView';
import TestView from './views/TestView.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeView}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="testView" component={TestView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
