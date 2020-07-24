
import React, { Component } from 'react';

import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import ScanScreen from './ScanScreen';

export default class MainScreen extends Component {


  render() {
    return (
        <View style={styles.content}>
        <View style={styles.body}>
        <Text>Scanner!</Text>
            <View>
                <Text>Scanner!</Text>
            </View>
            <View styles={styles.contentBody}>
                <ScanScreen></ScanScreen>
            </View>
            <View>
                
            </View>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  content:{
    margin:"auto",
  },
  body :{
    width : "90%",
    height : "80%",
    backgroundColor :"grey",
    margin :"auto",
    marginTop : 20,
    marginLeft:"5%"
  },
  contentBody :{
    display :"none"
  }
});
