import * as React from 'react';
import {  StyleSheet, View, Text,AsyncStorage,TouchableOpacity} from 'react-native';

import { QRCode } from 'react-native-custom-qr-codes-expo';


/*
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});*/

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = { data: "" };
  }

  getSaveQRCode = async () => {
    try {
      const value = await AsyncStorage.getItem('qrData');
      if (value !== null) {
        this.setState({data: value});
      }
    } catch (error) {
    }
  };

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Save Scanner</Text>
        <Text style={styles.instructions}>Share QR Code for us!</Text>
        { this.state.data != "" ? <QRCode content={this.state.data}/> : 
        <View style={styles.qrBox}>
             <TouchableOpacity style={{marginTop:'auto',marginBottom:'auto'}} onPress={this._onPressButton}> 
              <Text style={styles.qrText}>
                Create New QR Code
              </Text>
            </TouchableOpacity >
        </View> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: '10%',
  },
  qrBox:{
    width : '65%',
    height :'30%',
    backgroundColor: '#efefef',
    borderColor : 'gray',
    borderWidth: 4,
    borderRadius: 6,
  },
  qrText :{
      textAlign: 'center',
      fontSize : 20,
  },
});
