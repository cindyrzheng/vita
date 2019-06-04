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

const plantprof = require('./images/leaves.png');
const gear = require('./images/gear.png');
export default class TipsHome extends React.Component {
  static navigationOptions = {
    title: null
  };

  render() 
  {
    const {navigate} = this.props.navigation;
      return( 

         <View style={styles.container}>
          <View style = {styles.topButton}>
          <TouchableOpacity
              style={styles.xButton}
              onPress={() => navigate('ActualTips', {name: null})}>
              <Text style={styles.xBtnText}>X</Text>
              </TouchableOpacity>
          </View>
          <Text style = {styles.headerText}>Sleep Tips</Text>
          <Text style = {{marginTop: -20, color :'#818181', marginBottom: 10 }}>Tap the tip to read more</Text>
          <View style = {styles.settingContainer}>
             <TouchableOpacity
              style={
                  {backgroundColor: "#FFFDEF",
                    width: 342,
                    height:150,
                    borderRadius:30}}
              onPress={() => navigate('Notifications', {name: 'Notification Options'})}>
              <Text style={styles.customBtnText}>Make sure you keep your sleep schedule consistent, from the time to sleep to when you wake up, even on the weekends. An established sleep schedule helps your cardiovascular system, your functions of learning and memory, and your immune system.</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={{
                backgroundColor: "#F9FDF9",
                width: 342,
                height:117,
                borderRadius:30
                }}
              onPress={() => navigate('Tips', {name: null})}>
              <Text style={styles.customBtnText}>Sleep at a cool temperature, around 65 degrees Fahrenheit. Better quality sleep helps to restore and regulate your physical health, mental health, and even reproductive health.</Text>
              </TouchableOpacity>
          </View>
          </View>
          



    );

  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      marginTop:-20,
      backgroundColor:'#FFFFFF'
    },
    settingsBtnBG: {
        backgroundColor: "#FFFFFF",
        width: 27,
        height:27
        },
    gear:{
        width:27,
        height:27,
    },
    headerText:{
      marginTop:-40,
      color:'#000000',
      fontSize:36,
      lineHeight:85
    },
    
    settingContainer:
    {
      alignItems: 'center',
      marginTop: 10,
      
    },
    topButton:{
      alignSelf: 'flex-end',
      marginTop: 25,
      right:10
    },
    topSButton:{
        alignSelf: 'flex-start',
        marginTop: 30,
        left:10
      },
    settingText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 30,
  },
  customBtnText: {
    fontSize: 15,
    color: '#000000',
    lineHeight: 18,
    textAlign: 'left',
    marginTop:10,
    left:10,
    marginRight: 10
},
xBtnText: {
  fontSize: 25,
  color: '#000000',
  lineHeight: 24,
  textAlign: 'center',
  marginTop: 0
},
/* Here style the background of your button */
customBtnBG: {
backgroundColor: "#84A6FD",
width: 342,
height:84,
borderRadius:30
},
xButton:{
  backgroundColor: '#FFFFFF',
}
});