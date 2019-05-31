import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

import { MonoText } from '../components/StyledText';
import ToggleSwitch from 'toggle-switch-react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const plantprof = require('./images/plant.jpg');

export default class DayGraphs extends React.Component {
    state = {
        option: 'option 1'
    }
  static navigationOptions = {
    title: null
  };

  onPress = (optionnum) => {
    this.setState({
      option: optionnum
    })
  }

  render() 
  {
      const days = [ {
        text: '1',
        action: () => console.log('pressed button one'),
      }, 
      {
        text: '2',
        action: () => console.log('pressed button two')            
      },
      {
      text: '3',
        action: () => console.log('pressed button one'),
      }, 
      {
        text: '4',
        action: () => console.log('pressed button two')            
      },
      {text: '5',
      action: () => console.log('pressed button one'),
    }, 
    {
      text: '6',
      action: () => console.log('pressed button two')            
    },
    {
        text: '7',
        action: () => console.log('pressed button two')            
      }
  ];
  const buttonDay = days.map(b=>{
    return (
        <TouchableOpacity
        style = {styles.customBtnBG}
        onPress = {b.action}>
        <Text>{b.text}</Text>
        </TouchableOpacity>);
  });
      return(
          <View style = {styles.container}>
            <View style = {styles.Dates}>
                    {buttonDay.map(b=>b)}
            </View>
          </View>
          
      );
  }
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent : 'center',
        marginTop:0
    },
    Dates:{
        left:15,
        flexDirection: "row"
    },
    Greeting:{
        left:120,
        marginTop:20
    },
    topSettingButton:{
        alignSelf: 'flex-end',
        marginTop: -5,
        right:10,
        left:120,
        paddingHorizontal:20
    },
    customBtnText: {
        fontSize: 15,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 20
    },
    
    /* Here style the background of your button */
    customBtnBG: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal:5,
    paddingVertical: 5,
    width: 55,
    height:30
    },
    plantprof: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:-20
    },
    
});