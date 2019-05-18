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
    title: null
  };

  render() 
  {
      return(
          <View style = {styles.container}>
            <View style = {styles.topOptions}>
                <View style = {styles.topButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={() => console.log("wow you have picked option 1 wowowowow kewl")}>
                        <Text style={styles.customBtnText}>Option 1</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.topButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={() => console.log("wow you have picked option 1 wowowowow kewl")}>
                        <Text style={styles.customBtnText}>Option 2</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.topButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={() => console.log("wow you have picked option 1 wowowowow kewl")}>
                        <Text style={styles.customBtnText}>Option 3</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.topButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={() => console.log("wow you have picked option 1 wowowowow kewl")}>
                        <Text style={styles.customBtnText}>Option 4</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
      );
  }
};

const styles = StyleSheet.create({
    container:{},
    topOptions:
    {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    topButton:
    {
        paddingHorizontal:5,
        paddingVertical: 5,
    },
    customBtnText: {
        fontSize: 15,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    
    /* Here style the background of your button */
    customBtnBG: {
    backgroundColor: "#D3D3D3",
    paddingHorizontal:5,
    paddingVertical: 5,
    width: 75,
    height:75
    },
});