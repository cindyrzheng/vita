import React, { Component } from 'react';
import { Alert, Button, TextInput, Text, View, StyleSheet } from 'react-native';
import axios from 'axios'

import { TitleText } from '../components/TitleFont';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      user: null
    };
  }
  
  onRegister = () => {
    axios.post("http://localhost:3000/register?email=" + this.state.username + "&password=" + this.state.password)
    .then((response) => {
      this.setState({
          username: '',
          password: '',
          user: response,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  onLogin = () => {
    axios.post("http://localhost:3000/register?login=" + this.state.username + "&password=" + this.state.password)
    .then((response) => {
      this.setState({
          user: response,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi! Login to Vita</Text>
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
        
        <Button
          title={'Login'}
          style={styles.login}
          onPress={this.onRegister.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
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
  }
});