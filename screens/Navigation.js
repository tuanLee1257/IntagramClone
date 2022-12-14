import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NewPostSCreen from './NewPostSCreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
const Stack = createStackNavigator();
const screenOptions = {headerShown: false};
function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{gestureEnabled: true}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{gestureEnabled: true}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{gestureEnabled: true}}
        />
        <Stack.Screen
          name="NewPostScreen"
          component={NewPostSCreen}
          options={{gestureEnabled: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
// navigationHook
