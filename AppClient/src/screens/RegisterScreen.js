import React, { Component } from "react";

import styles from "../assets/style/style";
import {Keyboard,Text,Button, View, TextInput, TouchableOpacity,TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';

const appId = "1047121222092614"

export default class RegisterScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Register</Text>
            <Text style={styles.labelText}>Name</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Text style={styles.labelText}>Email</Text>
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Text style={styles.labelText}>Phone</Text>
            <TextInput placeholder="Phone" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TouchableOpacity style={{marginTop:'5%'}} onPress={this._onPressButton}> 
              <Text style = {styles.loginButton}>
                Register
              </Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={this._onPressButton}> 
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

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }

  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}
