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
import SleepGraph from './SleepGraph.js';
import WaterGraph from './WaterGraph.js';
import ActivityGraph from './ActivityGraph.js';
const plantprof = require('./images/plant.jpg');

export default class GraphScreen extends React.Component {
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
                <SleepGraph></SleepGraph>
                <WaterGraph></WaterGraph>
                <ActivityGraph></ActivityGraph>
                
        </View>
      );
  }
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent : 'center',
    },
    expandedView : {
        marginTop:25,
        alignSelf: 'center',
    },
    expandedViewText : {
        marginTop:25,
        paddingHorizontal:20,
        alignSelf:'center',
        fontSize:18,
        lineHeight:21,
        color:'#151515'
    },
    graphDescription:{
        fontSize:15,
        lineHeight:17.54,
        alignSelf:'center',
        color:'#4A4A4A',
    }
});
/*<View style = {styles.expandedViewText}>
                    <Text>Water</Text>
                </View>
                <View style = {styles.expandedView}>
                    <Text>graph here</Text>
                </View>
                <View style = {styles.expandedViewText}>
                    <Text>You drank 5 cups of water today</Text>
                </View>
                 <View style = {styles.expandedViewText}>
                 <Text>Activity</Text>
                 </View>
             <View style = {styles.expandedView}>
                 <Text>graph here</Text>
             </View>
             <View style = {styles.expandedViewText}>
                    <Text>You exercised a total of 30 minutes today</Text>
                </View>*/