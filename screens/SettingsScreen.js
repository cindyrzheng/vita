import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

import { MonoText } from '../components/StyledText';
import ToggleSwitch from 'toggle-switch-react-native';

const plantprof = require('./images/plant.jpg');
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() 
  {
      return( 

         <View style={styles.container}>
            <Image
                style={styles.plantprof}
                source={plantprof}
            />

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
          </View>
          </View>



    );

  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    plantprof: {
        width: 150,
        height: 200,
    },
    settingContainer:
    {
      alignItems: 'center',
      marginTop: 50,
    },
    settingText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
