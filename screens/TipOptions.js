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

  constructor(props){
    super(props);
    this.state = {
        tips : ["Tip #1", "Tip #2","Tip #3", "Tip #4", "Tip #5","Tip #6"]
    }
  }
  static navigationOptions = {
    title: null,
  };

  render() 
  {
    const {navigate} = this.props.navigation;
      return(
        <View style={styles.container}>
          <View style = {styles.topButton}>
              <TouchableOpacity
                  style={styles.customBtnBG}
                  onPress={() => navigate('Home', {name: null})}>
                  <Text style={styles.xBtnText}>X</Text>
                  </TouchableOpacity>
          </View>
          <View style = {styles.header}>
              <View style ={styles.bigheaderText}>
                <Text>Tip Options</Text>
              </View>
              <View style ={styles.smolheaderText}>
                <Text>Choose health tips you want to receive</Text>
              </View>
          </View>
          <View style={styles.tipsbox}>
            <View style = {{flexDirection: "row", marginTop: 10, paddingTop:30}}>
                <View style = {styles.togglebuttonText}>
                      <Text> Sleep</Text>
                </View>
                <View style = {styles.togglebutton}>
                  <ToggleSwitch
                      isOn={true}
                      onColor='#FFDCAF'
                      offColor='#FFDCAF'
                      label=''
                      labelStyle={{color: '#FFDCAF', fontWeight: '900'}}
                      size='medium'
                      onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                </View>
              </View>
              <View style = {{flexDirection: "row", marginTop: 50,}}>
                <View style = {styles.togglebuttonText}>
                      <Text> Water</Text>
                </View>
                <View style = {styles.togglebutton}>
                  <ToggleSwitch
                      isOn={false}
                      onColor='#FFDCAF'
                      offColor='#FFDCAF'
                      label=''
                      labelStyle={{color: '#FFDCAF', fontWeight: '900'}}
                      size='medium'
                      onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                </View>
              </View>
              <View style = {{flexDirection: "row", marginTop: 50}}>
                <View style = {styles.togglebuttonText}>
                  <Text> Activity</Text>
                </View>
                <View style = {styles.togglebutton}>
                  <ToggleSwitch
                      isOn={false}
                      onColor='#FFDCAF'
                      offColor='#FFDCAF'
                      label=''
                      labelStyle={{color: '#FFDCAF', fontWeight: '900'}}
                      size='medium'
                      onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                </View>
              </View>
              <View style = {{flexDirection: "row", marginTop: 50}}>
              <View style = {styles.togglebuttonText}>
                  <Text> Heart rate</Text>
                </View>
                <View style = {styles.togglebutton}>
                  <ToggleSwitch
                      isOn={false}
                      onColor='#FFDCAF'
                      offColor='#FFDCAF'
                      label=''
                      labelStyle={{color: '#FFDCAF', fontWeight: '900'}}
                      size='medium'
                      onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                </View>
              </View>
              <View style = {{flexDirection: "row", marginTop: 50}}>
                <View style = {styles.togglebuttonText}>
                  <Text> Mood</Text>
                </View>
                <View style = {styles.togglebutton}>
                  <ToggleSwitch
                      isOn={false}
                      onColor='#FFDCAF'
                      offColor='#FFDCAF'
                      label=''
                      labelStyle={{color: '#FFDCAF', fontWeight: '900'}}
                      size='medium'
                      onToggle={ (isOn) => console.log('changed to : ', isOn)}/>
                </View>
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
        backgroundColor:'#FFFFFF'
    },
    topButton:{
      alignSelf: 'flex-end',
      right:10
      },
      xBtnText: {
        fontSize: 25,
        color: '#000000',
        lineHeight: 24,
        textAlign: 'center',
      },
    header: {
      alignItems: 'center',
      marginBottom: 20
    },
    headerText:{
      color:'#000000',
      fontSize:36,
      lineHeight:85,
      fontFamily:"rubik"
    },
    smolheaderText: {
        fontSize: 12,
        color: '#000000',
        lineHeight: 14,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily:"rubik"
    },
    tipsbox : { 
        flex: 1, 
        flexDirection: "column", 
        width: 257,
        height: 257,
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
        marginBottom:30
    },
    togglebutton: { 
        flex: 1, 
        alignSelf:'flex-end',
        marginRight:10
    },
    togglebuttonText: {
      flex:1,
      marginTop: -10,
      height:15,
      width:80,
      marginLeft: 10,
      marginRight:95,
      color:'#151515',
      fontFamily: 'rubik'
    },
});
