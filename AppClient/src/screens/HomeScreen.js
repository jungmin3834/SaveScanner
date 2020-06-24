import * as React from 'react';
import {  StyleSheet, View,AsyncStorage ,Text,TouchableOpacity} from 'react-native';
import { QRCode } from 'react-native-custom-qr-codes-expo';


class Home extends React.Component {
  constructor(){
    super();
    this.state = { data: "Load" };
    this.getSaveQRCode();
  }

   getSaveQRCode = async () => {
     const update = this.updateData;
    try {
      const data = await (await AsyncStorage.getItem('qrData')).toString();
      update(data);
    } catch (error) {
      update("");
    }
  };
  
  updateData = (dataString) =>{
    this.setState({data: dataString})
  }

  moveToRegisterScreen = () => {
    this.props.navigation.navigate('RegisterScreen', {
      updateData: this.updateData,
      data : this.state.data
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Save Scanner</Text>
        <Text style={styles.instructions}>Share QR Code for us!</Text>
        { 
        this.state.data ==="Load" ? ( 
        <TouchableOpacity style={styles.qrBox}> 
        <View style={{marginTop:'auto',marginBottom:'auto'}}>
              <Text style={styles.qrText}>
                  Load QR Code~
              </Text>
        </View> 
        </TouchableOpacity >) :
        this.state.data != "" ? 
        <TouchableOpacity onPress={() =>{ this.moveToRegisterScreen(); }}> 
          <QRCode content={this.state.data} />
        </TouchableOpacity> : 
        <TouchableOpacity style={styles.qrBox} onPress={() =>{ this.moveToRegisterScreen(); }}> 
        <View style={{marginTop:'auto',marginBottom:'auto'}}>
              <Text style={styles.qrText}>
                Create New QR Code
              </Text>
        </View> 
        </TouchableOpacity >
        }
      </View>
    );
  }
}

export default function HomeScreen({ navigation }) {
  return <Home navigation={navigation} ></Home>
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
