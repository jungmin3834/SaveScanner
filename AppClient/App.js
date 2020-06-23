import * as React from 'react';

import {AsyncStorage, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import StartScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
//초기에 시작시 로그인이 체크

class FirstScreenClass extends React.Component{
    constructor() {
      super()
   }
  
   render() {
    return (
       <Stack.Navigator  screenOptions={{ headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown: false}}/>
        
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
   }
  }



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
        <FirstScreenClass/>
    </NavigationContainer>
  );
}