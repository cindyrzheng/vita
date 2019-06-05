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
const graph = require('./images/sleepgraph.png')

export default class ActivityGraph extends React.Component {
  static navigationOptions = {
    title: null
  };

  render() 
  {
      return( 

         <View style={styles.container}>
          <View style={styles.RectangleShapeView}>
          <View style = {styles.expandedViewText}>
                    <Text>Activity</Text>
                </View>
                
             <Image
                style={styles.graphImage}
                source={graph}
            />
            <View style = {styles.expandedViewText}>
                    <Text>You exercised a total of 30 minutes today</Text>
                </View>
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
      marginTop:80,
      backgroundColor:'#FFFFFF',
      marginBottom:90
    },
    graphImage:{
        width:218,
        height:109,
        alignSelf:'center'
    },
    RectangleShapeView :{
        width: 327,
        height: 155,
        borderRadius: 30,
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

    },
    expandedViewText : {
        marginTop:5,
        paddingHorizontal:20,
        alignSelf:'center',
        fontSize:18,
        lineHeight:21,
        color:'#151515'
    },
});