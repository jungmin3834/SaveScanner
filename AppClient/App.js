import * as React from 'react';
import { Platform, StyleSheet, View, Text,AsyncStorage} from 'react-native';
import Home from './screen/home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render(){
    return (
      <MyStack> </MyStack>
    );
  }
}


