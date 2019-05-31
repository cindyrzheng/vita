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

export default class GraphScreen extends React.Component {
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
                <View style = {styles.expandedViewText}>
                    <Text>my sleep</Text>
                </View>
                <View style = {styles.expandedView}>
                    <Text>graph here</Text>
                </View>
                <View style = {styles.expandedViewText}>
                    <Text>Heart Rate</Text>
                </View>
                <View style = {styles.expandedView}>
                    <Text>graph here</Text>
                </View>
                 <View style = {styles.expandedViewText}>
                 <Text>Activity</Text>
                 </View>
             <View style = {styles.expandedView}>
                 <Text>graph here</Text>
             </View>
             <View style = {styles.botOptions}>
                <View style = {styles.botButton}>
                        <TouchableOpacity
                            style={styles.customBtnBG}
                            onPress= {console.log('hi')}>
                            <Text style={styles.customBtnText}>Tips</Text>
                        </TouchableOpacity>
                </View>
                <View style = {styles.botButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={console.log('hi')}>
                        <Text style={styles.customBtnText}>Reminders</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent : 'center',
    },
    botOptions:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:100
    },
    botButton:
    {
        paddingHorizontal:50,
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
    width: 100,
    height:40
    },

    expandedView : {
        marginTop:25,
        alignSelf: 'center',
    },
    expandedViewText : {
        marginTop:25,
        paddingHorizontal:20
    }
});