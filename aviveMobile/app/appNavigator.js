import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import authView from './views/AuthView';
import EmergencyView from './views/EmergencyView.js';
import InEmergencyView from './views/InEmergencyView.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="auth"
          component={authView}
          options={{title: 'Login!'}}
        />
        <Stack.Screen name="emergency" component={EmergencyView} />
        <Stack.Screen
          name="inEmergency"
          component={InEmergencyView}
          options={{title: 'Nearby Emergency!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
