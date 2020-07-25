
import React, { Component } from 'react';

import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  AsyncStorage
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class ScanScreen extends Component {
  setDataToLocalDB = (data) =>{
    let date = new Date();
    const dateKey = date.getUTCFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getUTCDate();
    AsyncStorage.getItem(dateKey).then(storageData => {
      if(storageData == null){
        storageData = "["+data + "]";
      }else{
        storageData = storageData.slice(0, -1) + "," + data + "]";
      }
      AsyncStorage.setItem(dateKey, storageData)
      .catch(e =>{alert("저장 에러 : " + e)})
      .then(()=>{alert("저장 성공")});
    })
  }

  onSuccess = e => {
    try{
      let jsonData =  e.data+',"time":'+'"'+new Date().toTimeString() + '"}';
      if(jsonData != null){
        //this.setDataToLocalDB(jsonData);
      }
    }
    catch(er){
      alert("Save Fail! " + er);
    }

  };

  render() {
    return (
      <QRCodeScanner
      style={styles.scannerBody}
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
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
    height : 30
    
  },
  scannerBody : {
    marginTop:"10%",
    backgroundColor:"black"
    
  },
});
