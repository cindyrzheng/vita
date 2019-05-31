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
import DayGraph from './DayGraphs'
import Graph from './GraphScreen'
const plantprof = require('./images/plant.jpg');

export default class HomeStatScreen extends React.Component {
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
      return(
          <View style = {styles.container}>
            <View style = {styles.SettingsAndGreeting}>
                <View style = {styles.Greeting}>
                    <Text>Good Morning, ________</Text>
                </View>
                <View style = {styles.topSettingButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={(e) => this.onPress('option 1')}>
                        <Text style={styles.customBtnText}>Settings</Text>
                    </TouchableOpacity>
                </View>
             </View>
             <Image
                style={styles.plantprof}
                source={plantprof}
            />
            <DayGraph></DayGraph>
            <Graph></Graph>
        </View>
      );
  }
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent : 'center',
    },
    SettingsAndGreeting:{
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
    backgroundColor: "#D3D3D3",
    paddingHorizontal:5,
    paddingVertical: 5,
    width: 75,
    height:75
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