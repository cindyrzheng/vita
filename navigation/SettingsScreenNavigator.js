import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TipOptionsScreen from '../screens/TipOptions';
import RemindersScreen from '../screens/Reminders';
import NotificationsScreen from '../screens/NotificationOptions';
import HomeScreen from '../screens/HomeScreen';

const settingScreenNavigator = createStackNavigator({
    Tips: TipOptionsScreen,
    Reminders: RemindersScreen,
    Notifications: NotificationsScreen,
    Home: HomeScreen,
})

const App = createAppContainer(settingScreenNavigator);
export default App;