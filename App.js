import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import LocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteor";

const Stack = createStackNavigator();

function App(){
  
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Principal" component={HomeScreen} />
        <Stack.Screen name="Localizacion" component={LocationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

export default App;