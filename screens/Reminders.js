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

<<<<<<< HEAD
    static navigationOptions = {
    title: 'Reminder Options',
=======
  constructor(props){
    super(props);
    this.state = {
        tips : ["Tip #1", "Tip #2","Tip #3", "Tip #4", "Tip #5","Tip #6"]
    }
  }
  static navigationOptions = {
    title: '',
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
  };

  render() 
  {
<<<<<<< HEAD
    const {navigate} = this.props.navigation;
      return(
            <View style={styles.tipsbox}>
            <View style = {styles.header}>
            <View style = {styles.topButton}>
                <TouchableOpacity
                    style={styles.customBtnBG}
                    onPress={() => navigate('Settings', {name: 'Settings Screen'})}>
                    <Text style={styles.customBtnText}>X</Text>
                    </TouchableOpacity>
            </View>
                <View style ={styles.bigheaderText}>
                <Text>
                    Reminder Options
=======
      return(
            <View style={styles.tipsbox}>
            <View style = {styles.header}>
                <View style ={styles.bigheaderText}>
                <Text>
                    Tip Options
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
                </Text>
                </View>
                <View style ={styles.smolheaderText}>
                <Text>
<<<<<<< HEAD
                    Choose reminders you want to receive
=======
                    Choose health tips you want to receive
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
                </Text>
                </View>
            </View>
            <View style = {{flexDirection: "row", marginTop: 10}}>
              <View style = {styles.togglebuttonText}>
                    <Text>
<<<<<<< HEAD
                        Reminder #1
=======
                        Tip #1
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
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
<<<<<<< HEAD
                        Reminder #2
=======
                        Tip #2
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
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
<<<<<<< HEAD
                        Reminder #3
=======
                        Tip #3
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
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
<<<<<<< HEAD
                        Reminder #4
=======
                        Tip #4
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
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
<<<<<<< HEAD
                        Reminder #5
=======
                        Tip #5
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
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
<<<<<<< HEAD
    topButton:{
        alignSelf: 'flex-end',
        marginTop: 0,
        right: 280
      },
=======
>>>>>>> a25fe756ed41f67be31c56c6e64ebd9678a98fbe
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
