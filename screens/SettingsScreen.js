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

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
<<<<<<< HEAD
    title: 'Settings Screen'
=======
    title: '',
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
  };

  render() 
  {
    const {navigate} = this.props.navigation;
      return( 

         <View style={styles.container}>
          <View style = {styles.topButton}>
          <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('Home', {name: null})}>
              <Text style={styles.customBtnText}>X</Text>
              </TouchableOpacity>
          </View>
            <Image
                style={styles.plantprof}
                source={plantprof}
            />
<<<<<<< HEAD
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
              onPress={() => navigate('Tips', {name: 'Tip Options'})}>
              <Text style={styles.customBtnText}>Tips</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('Reminders', {name: 'Reminder Options'})}>
              <Text style={styles.customBtnText}>Reminders</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('Notifications', {name: 'Notification Options'})}>
              <Text style={styles.customBtnText}>Help</Text>
              </TouchableOpacity>
=======

          <View style = {styles.settingContainer}>

             <Text style={styles.settingText}>
                Notifications
              </Text>
          </View>

          <View style = {styles.settingContainer}>
             <Text style={styles.settingText}>
                Tips
              </Text>
          </View>

          <View style = {styles.settingContainer}>
             <Text style={styles.settingText}>
                Reminder
              </Text>
          </View>

          <View style = {styles.settingContainer}>
             <Text style={styles.settingText}>
                Help
              </Text>
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
          </View>
          </View>



    );

  }
}

const styles = StyleSheet.create({
    container: {
    },
    plantprof: {
        width: 150,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    
    settingContainer:
    {
      alignItems: 'center',
      marginTop: 40,
    },
<<<<<<< HEAD
    topButton:{
      alignSelf: 'flex-end',
      marginTop: -5,
      left: 80
=======
    settingContainer:
    {
      alignItems: 'center',
      marginTop: 50,
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
    },
    settingText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
<<<<<<< HEAD
  button: {
    width: 150,
    height: 30,
  },
  customBtnText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
},

/* Here style the background of your button */
customBtnBG: {
backgroundColor: "#FFFFFF",
paddingHorizontal: 30,
paddingVertical: 5,
width: 200
}
});
=======
});
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
