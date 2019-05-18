import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen';

const optionsNavigator = createStackNavigator({
    Settings: SettingsScreen,
})

const App = createAppContainer(optionsNavigator);
export default App;