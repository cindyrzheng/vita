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
            <View style = {styles.topOptions}>
                <View style = {styles.topButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={(e) => this.onPress('option 1')}>
                        <Text style={styles.customBtnText}>Option 1</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.topButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress = {(e) => this.onPress('option 2')}>
                        <Text style={styles.customBtnText}>Option 2</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.topButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={(e) => this.onPress('option 3')}>
                        <Text style={styles.customBtnText}>Option 3</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.topButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={(e) => this.onPress('option 4')}>
                        <Text style={styles.customBtnText}>Option 4</Text>
                    </TouchableOpacity>
                </View>
            </View>
                <View style = {styles.expandedViewText}>
                    <Text>my sleep</Text>
                </View>
                <View style = {styles.expandedView}>
                    <Text>expanded graph here</Text>
                </View>
                <View style = {styles.expandedViewText}>
                    <Text>{this.state.option}</Text>
                </View>
                <View style = {styles.expandedView}>
                    <Text>expanded graph here</Text>
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
    topOptions:
    {
        marginTop:50,
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

    expandedView : {
        marginTop:25,
        alignSelf: 'center',
    },
    expandedViewText : {
        marginTop:25,
        paddingHorizontal:20
    }
});