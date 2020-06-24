import React, { Component } from "react";

import styles from "../assets/style/style";
import {Keyboard,Text,AsyncStorage, View, TextInput, TouchableOpacity,TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';

const appId = "1047121222092614"



export default class RegisterScreen extends Component {
  constructor({route, navigation }){
    super();
    const { updateData } = route.params;
    const { data } = route.params;

    this.state = {update : updateData , phone :"",email: "", name :""};
    if(data != ""){
      alert(data);
      let parseData = JSON.parse(data + "}");
    }


  }

  _storeData = async (data) => {
    try {
      AsyncStorage.clear();
      await AsyncStorage.setItem( 'qrData', data  );
    } catch (error) {
      // Error saving data
    }
  };

  updateData(){
    if(this.state.name === "")
      alert("이름을 입력해주세요");
    else if(this.state.email === "")
      alert("이메일을 입력해주세요");
    else if(this.state.phone === "")
      alert("폰번호를 입력해주세요");
    else{
      let str = '{"name":' + '"' + this.state.name + '"' + ',"email":'+  '"' +this.state.email +  '"' +',"phone":' + '"' + this.state.phone +'"';
      this.state.update(str);
      this._storeData(str);
      this.props.navigation.goBack();

    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Register</Text>
            <Text style={styles.labelText}>Name</Text>
            <TextInput placeholder="Username"  onChangeText={(text) => this.setState({name:text})} value={this.state.name} 
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Text style={styles.labelText}>Email</Text>
            <TextInput placeholder="Email" onChangeText={(text )=>{this.setState({email:text })}} value={this.state.email} 
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Text style={styles.labelText}>Phone</Text>
            <TextInput placeholder="Phone"  onChangeText={(text )=>{this.setState({phone:text })}} value={this.state.phone}  
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TouchableOpacity style={{marginTop:'5%'}} onPress={() =>{this.updateData()}}> 
              <Text style = {styles.loginButton}>
                Register
              </Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() =>{this.props.navigation.goBack()}}> 
              <Text style = {styles.loginButton}>
                Go Back
              </Text>
            </TouchableOpacity >
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
