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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { MonoText } from '../components/StyledText';
import ToggleSwitch from 'toggle-switch-react-native';

//var reminderOptions = [1: "Tip #1", 2:"Tip #2",3: "Tip #3", 4:"Tip #4", 5:"Tip #5", 6:"Tip #6"];
export default class Reminders extends React.Component {

    static navigationOptions = {
    title: 'Reminder Options',
  };

  render() 
  {
    const {navigate} = this.props.navigation;
      return(
            <View style={styles.tipsbox}>
            <View style = {styles.header}>
            <View style = {styles.topButton}>
                <TouchableOpacity
                    style={styles.customBtnBG}
                    onPress={() => navigate('Home', {name: null})}>
                    <Text style={styles.customBtnText}>X</Text>
                    </TouchableOpacity>
            </View>
                <View style ={styles.bigheaderText}>
                <Text>
                    Reminder Options
                </Text>
                </View>
                <View style ={styles.smolheaderText}>
                <Text>
                    Choose reminders you want to receive
                </Text>
                </View>
            </View>
            <View style = {{flexDirection: "row", marginTop: 10}}>
              <View style = {styles.togglebuttonText}>
                    <Text>
                        Reminder #1
                    </Text>
                    </View>
              <View style = {styles.togglebutton}>
                    <ToggleSwitch
                        isOn={false}
                        onColor='red'
                        offColor='green'
                        label=''
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='medium'
                        onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                  </View>
                </View>
                <View style = {{flexDirection: "row", marginTop: 50}}>
              <View style = {styles.togglebuttonText}>
                    <Text>
                        Reminder #2
                    </Text>
                    </View>
              <View style = {styles.togglebutton}>
                    <ToggleSwitch
                        isOn={false}
                        onColor='red'
                        offColor='green'
                        label=''
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='medium'
                        onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                  </View>
                </View>
                <View style = {{flexDirection: "row", marginTop: 50}}>
              <View style = {styles.togglebuttonText}>
                    <Text>
                        Reminder #3
                    </Text>
                    </View>
              <View style = {styles.togglebutton}>
                    <ToggleSwitch
                        isOn={false}
                        onColor='red'
                        offColor='green'
                        label=''
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='medium'
                        onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                  </View>
                </View>
                <View style = {{flexDirection: "row", marginTop: 50}}>
              <View style = {styles.togglebuttonText}>
                    <Text>
                        Reminder #4
                    </Text>
                    </View>
              <View style = {styles.togglebutton}>
                    <ToggleSwitch
                        isOn={false}
                        onColor='red'
                        offColor='green'
                        label=''
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='medium'
                        onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                  </View>
                </View>
                <View style = {{flexDirection: "row", marginTop: 50}}>
              <View style = {styles.togglebuttonText}>
                    <Text>
                        Reminder #5
                    </Text>
                    </View>
              <View style = {styles.togglebutton}>
                    <ToggleSwitch
                        isOn={false}
                        onColor='red'
                        offColor='green'
                        label=''
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='medium'
                        onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                  </View>
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
    topButton:{
        alignSelf: 'flex-end',
        marginTop: 0,
        right: 280
      },
    header: {
        alignItems: 'center',
        marginBottom: 20
    },
    bigheaderText: {
        fontSize: 25,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20
    },
    smolheaderText: {
        fontSize: 10,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20
    },
    tipsbox : { 
        flex: 1, 
        flexDirection: "column", 
        alignSelf: "stretch", 
        alignItems: "center"
    },
    togglebutton: { 
        flex: 1, 
        marginLeft: 20,
        marginRight:60
    },
    togglebuttonText: {
      flex:1,
      marginTop: 5,
      marginRight: 20,
      marginLeft: 100
    },
});
