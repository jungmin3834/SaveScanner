
import React, { Component } from 'react';

import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Button
} from 'react-native';

import ScanScreen from './ScanScreen';
import QrDataScreen from './QrDataScreen';

/*
 <View style={styles.content}>
        <View style={styles.body}>
                  <ScanScreen></ScanScreen>
        </View>
        <View style={styles.bottomView}>
            <Text style={{color:"#efefef", fontSize:25}}>
                  저장 공간
            </Text>
        </View>
        </View>
*/

export default class MainScreen extends Component {
/*
       <View style={styles.contentBody}>
                <ScanScreen></ScanScreen>
          </View>

*/

  render() {
    return (
      <QrDataScreen></QrDataScreen>
       
    );
  }
}

const styles = StyleSheet.create({
  content:{
    backgroundColor :"black",
    margin:"auto",
  },
  body :{
    width : "100%",
    height :"100%",
    backgroundColor :"black",
    margin :"auto"
  },
  bottomView: {
    width: '100%',
    height:"20%",
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  }
});
