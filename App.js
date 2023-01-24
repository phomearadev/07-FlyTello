import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './app/tello_home';
import FlyScreen from './app/tello_fly';
import CommandScreen from './app/tello_command';


// App to control flight of a TELLO DRONE
// Philip O'Meara January 2023
// VERSION ON 24 JAN 2023

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fly" component={FlyScreen} />
        <Stack.Screen name="Command" component={CommandScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

// End