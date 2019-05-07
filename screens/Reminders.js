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
    title: 'app.json',
  };

  render() 
  {
      return( 
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-evenly", alignSelf: "stretch", alignItems: "center"}}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly"}} />
                            <Text>
                                Tip #1
                            </Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor='red'
                                offColor='green'
                                label=''
                                labelStyle={{color: 'black', fontWeight: '900'}}
                                size='medium'
                                onToggle={ (isOn) => console.log('changed to : ', isOn)}
                            />
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly"}} />
                            <Text>
                                Tip #2
                            </Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor='red'
                                offColor='green'
                                label=''
                                labelStyle={{color: 'black', fontWeight: '900'}}
                                size='medium'
                                onToggle={ (isOn) => console.log('changed to : ', isOn)}
                            />
                         <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly"}} />
                            <Text>
                                Tip #3
                            </Text>
                            <ToggleSwitch
                                isOn={false}
                                onColor='red'
                                offColor='green'
                                label=''
                                labelStyle={{color: 'black', fontWeight: '900'}}
                                size='medium'
                                onToggle={ (isOn) => console.log('changed to : ', isOn)}
                            />
        </View>

    );

  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    plantprof: {
        width: 150,
        height: 200,
    },
});




/*<ToggleSwitch
                    isOn={false}
                    onColor='red'
                    offColor='green'
                    label=''
                    labelStyle={{color: 'black', fontWeight: '900'}}
                    size='large'
                    onToggle={ (isOn) => console.log('changed to : ', isOn)}
                />*/