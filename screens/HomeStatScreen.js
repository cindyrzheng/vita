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
import { Font } from 'expo';
import { MonoText } from '../components/StyledText';
import { TitleText } from '../components/TitleFont';
import ToggleSwitch from 'toggle-switch-react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import DayGraph from './DayGraphs';
import Graph from './GraphScreen';
import axios from 'axios';
const plantprof = require('./images/plant.png');
const gear = require('./images/gear.png');
const water = require('./images/water.png');

export default class HomeStatScreen extends React.Component {
    state = {
        option: 'option 1',
        fontLoaded: false,
        user: null
    }
  static navigationOptions = {
    title: null
  };

  onPress = (optionnum) => {
    this.setState({
      option: optionnum
    })
  }


  async componentDidMount() {
    await Font.loadAsync({
      'karla': require('../assets/fonts/Karla-Regular.ttf'),
    });
    console.log("hehexd")
    this.setState({fontLoaded : true});
  }
  render() 
  {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const username = JSON.stringify(navigation.getParam('username', null));
      return(
          <View style = {styles.container}>
            <View style = {styles.SettingsAndGreeting}>
            {this.state.fontLoaded ? (
                <View style = {styles.Greeting}>
                    <Text>Good Morning, {username.substr(1, username.indexOf('@')-1)}</Text>
                </View>):null}
                <View style = {styles.topSettingButton}>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={(e) =>navigate('Settings', {name: null})}>
                        <Image
                        style = {styles.gear}
                        source = {gear}/>
                    </TouchableOpacity>
                </View>
             </View>
             <Image
                style={styles.plantprof}
                source={plantprof}
            />
            <DayGraph></DayGraph>
            <Graph style = {{height:310}}></Graph>
            <View style = {styles.botOptions}>
                <View style = {styles.botButton}>
                        <TouchableOpacity
                            style={styles.backBtnBG}
                            onPress= {() => navigate('ActualTips', {name: null})}>
                            <Text style={styles.backBtnText}>Tips</Text>
                        </TouchableOpacity>
                </View>
                <View style = {styles.waterButton}>
                    <TouchableOpacity
                        style={{backgroundColor: "#FFFFFF",
                        paddingHorizontal:5,
                        paddingVertical: 5,
                        width: 40,
                        height:40}}
                        onPress={() => navigate('AddWater', {name: null})}>
                        <Image 
                            style = {styles.water}
                            source = {water}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.botButton}>
                    <TouchableOpacity
                        style={styles.backBtnBG2}
                        onPress={() => navigate('ActualReminders', {name: null})}>
                        <Text style={styles.backBtnText}>Reminders</Text>
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
    SettingsAndGreeting:{
        flexDirection: "row"
    },
    Greeting:{
        left:120,
        marginTop:30,
        fontFamily:'karla',
    },
    topSettingButton:{
        alignSelf: 'flex-start',
        marginTop: 25,
        right:150,
    },
    customBtnText: {
        fontSize: 15,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 20
    },
    backBtnText: {
        fontSize: 15,
        color: '#FFFFFF',
        lineHeight: 24,
        textAlign: 'center',
        fontFamily:'rubik',
    },
    
    customBtnBG: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal:5,
    paddingVertical: 5,
    width: 27,
    height:27
    },
    botOptions:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:10
    },
    backBtnBG: {
        backgroundColor: "#FFBB63",
        paddingHorizontal:5,
        paddingVertical: 5,
        width: 100,
        height:40,
        borderRadius: 10
        },

        backBtnBG2: {
            backgroundColor: "#63ABFF",
            paddingHorizontal:5,
            paddingVertical: 5,
            width: 100,
            height:40,
            borderRadius: 10
            },
        botButton:
        {
            paddingHorizontal:35,
            paddingVertical: 5,
            marginBottom:30
        },
        water:{
            width:40,
            height:40
        },

    plantprof: {
        width: 67,
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:10
    },
    gear:{
        width:27,
        height:27,
    }
    
    
});