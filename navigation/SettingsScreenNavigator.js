import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TipOptionsScreen from '../screens/TipOptions';
import RemindersOptionsScreen from '../screens/ReminderOptions';
import NotificationsOptionsScreen from '../screens/NotificationOptions';
import HomeScreen from '../screens/HomeStatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RemindersScreen from '../screens/Reminders';
import TipsScreen from '../screens/Tips';
import RemindersHomeScreen from '../screens/ReminderHome';
import TipsHomeScreen from '../screens/TipHome';
import LoginScreen from '../screens/Login'

const settingScreenNavigator = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    Tips: TipOptionsScreen,
    Reminders: RemindersOptionsScreen,
    Notifications: NotificationsOptionsScreen,
    Settings: SettingsScreen,
    ActualReminders: RemindersScreen,
    ActualTips: TipsScreen,
    RemindersHome: RemindersHomeScreen,
    TipsHome: TipsHomeScreen

})

const App = createAppContainer(settingScreenNavigator);
export default App;