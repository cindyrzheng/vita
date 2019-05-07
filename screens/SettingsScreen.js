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

import { MonoText } from '../components/StyledText';
import ToggleSwitch from 'toggle-switch-react-native';

const plantprof = require('./images/plant.jpg');
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() 
  {
      return( 

         <View style={styles.container}>
            <Image
                style={styles.plantprof}
                source={plantprof}
            />
            <ToggleSwitch
            isOn={false}
            onColor='green'
            offColor='red'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='large'
            onToggle={ (isOn) => console.log('changed to : ', isOn)
          }
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