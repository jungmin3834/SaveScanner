
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


export default class MainScreen extends Component {
  constructor(props){
    super(props);
    this.state={scannerPage:true};
    this.changePage = this.changePage.bind(this);
  }

  changePage(){
    this.setState({scannerPage:!this.state.scannerPage})
  }


  render() {
    return (
    <View style={styles.content}>
      <View style={styles.body}>
        { this.state.scannerPage == false ? (  <QrDataScreen></QrDataScreen>):( <ScanScreen></ScanScreen>) }
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={this.changePage} style={styles.bottomButton}>
          <Text style={{color:"grey", fontSize:25 , textAlign:"center"}}>
                {this.state.scannerPage == true ? "저장 공간" : "스케너"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
  bottomButton :{
    backgroundColor:"#efefef",
    width:"50%",
    height :"50%",
    padding : "4%"
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
