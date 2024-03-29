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

const plantprof = require('./images/plant.png');

export default class SettingsScreen extends React.Component {
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
              onPress={() => navigate('Home', {name: null})}>
              <Text style={styles.xBtnText}>X</Text>
              </TouchableOpacity>
          </View>
          <Text style = {styles.headerText}>Settings</Text>
             <View style={styles.CircleShapeView}>
             <Image
                style={styles.plantprof}
                source={plantprof}
            />
             </View>
          <View style = {styles.settingContainer}>
             <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('Notifications', {name: 'Notification Options'})}>
              <Text style={styles.customBtnText}>Notifications</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('Tips', {name: null})}>
              <Text style={styles.customBtnText}>Tips</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('Reminders', {name: null})}>
              <Text style={styles.customBtnText}>Reminders</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('Notifications', {name: null})}>
              <Text style={styles.customBtnText}>Help</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => console.log("logged out")}>
              <Text style={styles.customBtnText}>Log Out</Text>
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
      justifyContent:'center',
      marginTop:-20,
      backgroundColor:'#FFFFFF'
    },
    headerText:{
      marginTop:-30,
      color:'#000000',
      fontSize:36,
      lineHeight:85
    },
    plantprof: {
        width: 67,
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:20
    },
    CircleShapeView: {
      width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderColor:'#FFFFFF',
        borderBottomWidth:0,
        shadowColor:'#D3D3D3',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        elevation:1,
        marginBottom:30
  },
    
    settingContainer:
    {
      alignItems: 'center',
      marginTop: 10,
    },
    topButton:{
      alignSelf: 'flex-end',
      marginTop: -5,
      right:10
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
    fontSize: 20,
    color: '#FFFFFF',
    lineHeight: 24,
    textAlign: 'center',
    marginTop:10
},
xBtnText: {
  fontSize: 25,
  color: '#000000',
  lineHeight: 24,
  textAlign: 'center',
  marginTop:-50
},
/* Here style the background of your button */
customBtnBG: {
backgroundColor: "#84A6FD",
width: 312,
height:46,
borderRadius:30
},
xButton:{
  backgroundColor: '#FFFFFF',
}
});
