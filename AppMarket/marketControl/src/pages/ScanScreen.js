
import React, { Component } from 'react';

import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class ScanScreen extends Component {
  onSuccess = e => {
    try{
      let jsonData =  JSON.parse(e.data+"}");
      if(jsonData != null){
        alert(jsonData.name);
      }
    }
    catch(er){

      alert(er + "  " + e.data);
    }

  };

  render() {
    return (
      <QRCodeScanner
      style={styles.scannerBody}
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity onPress={()=>{alert("dd")}} style={styles.buttonTouchable}>
          <View>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </View>
        </TouchableOpacity>
      }
    />
    );
  }
}

const styles = StyleSheet.create({

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    backgroundColor : 'ivory',
    height : 30
    
  },
  scannerBody : {
    marginTop:"10%",
    
  },
});
