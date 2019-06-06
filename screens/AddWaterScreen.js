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

const water = require('./images/water.png');
const gear = require('./images/gear.png');
export default class RemindersScreen extends React.Component {
  static navigationOptions = {
    title: null
  };

  render() 
  {
    const {navigate} = this.props.navigation;
      return( 

         <View style={styles.container}>
         <View style = {styles.topSButton}>
            <TouchableOpacity
                        style={styles.settingsBtnBG}
                        onPress={(e) =>navigate('Settings', {name: null})}>
                        <Image
                        style = {styles.gear}
                        source = {gear}/>
            </TouchableOpacity>
         </View>
          <View style = {styles.topButton}>
          <TouchableOpacity
              style={styles.xButton}
              onPress={() => navigate('Home', {name: null})}>
              <Text style={styles.xBtnText}>X</Text>
              </TouchableOpacity>
          </View>
          <Text style = {styles.headerText}>Add Water</Text>
             <View style={styles.CircleShapeView}>
             <Image
                style={styles.water}
                source={water}
            />
             </View>
          <View style = {styles.settingContainer}>
             <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('RemindersHome', {name:null})}>
              <Text style={styles.customBtnText}>Add 1 cup</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={{
                backgroundColor: "#FFBB63",
                width: 312,
                height:46,
                borderRadius:30
                }}
              onPress={() => navigate('RemindersHome', {name: null})}>
              <Text style={styles.customBtnText}>Add 2 cups</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={{
                backgroundColor: "#5ECE79",
                width: 312,
                height:46,
                borderRadius:30
                }}
              onPress={() => navigate('RemindersHome', {name: null})}>
              <Text style={styles.customBtnText}>Add 3 cups</Text>
              </TouchableOpacity>
          </View>
          <View style = {styles.settingContainer}>
             <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => navigate('RemindersHome', {name:null})}>
              <Text style={styles.customBtnText}>Add 4 cups</Text>
              </TouchableOpacity>
          </View>

          <View style = {styles.settingContainer}>
          <TouchableOpacity
              style={{
                backgroundColor: "#FFBB63",
                width: 312,
                height:46,
                borderRadius:30
                }}
              onPress={() => navigate('RemindersHome', {name: null})}>
              <Text style={styles.customBtnText}>Add 5 cups</Text>
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
      marginTop:-60,
      color:'#000000',
      fontSize:36,
      lineHeight:85
    },
    water: {
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:20
    },
    CircleShapeView: {
      width: 153,
        height: 153,
        borderRadius: 153/2,
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