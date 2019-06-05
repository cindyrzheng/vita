import React, { Component } from 'react';
import { Image, TouchableOpacity, Alert, Button, TextInput, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo';
import {Card, CardSection, RButton} from '../components'
import axios from 'axios'

import { TitleText } from '../components/TitleFont';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      lloading: false,
      rloading: false,
      user: null
    };
  }
  
  empty = () => {

  };

  onRegister = () => {
    this.setState({
      rloading: true
    });
    axios.post("http://localhost:3000/register?email=" + this.state.username + "&password=" + this.state.password)
    .then((response) => {
      Alert.alert(
        'Registered Vita User!',
        '',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      this.setState({
          username: '',
          password: '',
          user: response,
          rloading: false
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        rloading: false,
      });
      Alert.alert(
        'Invalid email/and or password',
        '',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    });
  };

  onLogin = () => {
    this.setState({
      lloading: true
    });
    axios.post("http://localhost:3000/login?email=" + this.state.username + "&password=" + this.state.password)
    .then((response) => {
      this.setState({
        username: '',
        password: '',
        user: response,
        lloading: false
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        username: '',
        password: '',
        lloading: false
      });
      Alert.alert(
        'Invalid email/and or password',
        '',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    });
  };
  renderLogin() {
    if(this.state.lloading) {
      return <ActivityIndicator size="large" color="#0000ff" style={styles.spinner} />;
    }
    else if(this.state.rloading) {
      return (
        <RButton onPress={this.empty}>
              LOGIN
           </RButton>
      )
    }
    return (<RButton onPress={this.onLogin}>
              LOGIN
           </RButton>);
  }
  renderButton() {
    if(this.state.rloading) {
      return <ActivityIndicator size="large" color="#0000ff" style={styles.spinner} />;
    }
    else if(this.state.lloading) {
      return (
        <RButton onPress={this.empty}>
              SIGN UP
           </RButton>
      )
    }
    return (<RButton onPress={this.onRegister}>
              SIGNUP
           </RButton>);
  }

  render() {
    return (
      <LinearGradient colors={['#F7F6EE', '#FFE7C8']} style={{flex:1}}>
          <View style={styles.image}>
            <Image
              source={require('../pngs/leaf.png')} 
            />
            <Text style={styles.titletext}>Welcome to</Text>
            <Text style={styles.titletext2}>Vita</Text>
          </View>
         <View style={styles.container}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
          <View style={styles.bottom}>
            <Card>
              <CardSection>
                {this.renderLogin()}
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                {this.renderButton()}
              </CardSection>
            </Card>
         </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignSelf: 'center',
  },  
  image: {
    flex: 1,
    alignItems: 'center',
  },
  titletext: {
    alignSelf: 'center',
    fontFamily: 'rubik',
    fontSize: 30
  },
  titletext2: {
    alignSelf: 'center',
    fontFamily: 'rubik',
    fontSize: 50
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  input: {
    alignSelf: 'center',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10
  },
  login: {
    fontFamily: "Rubik-Regular"
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});