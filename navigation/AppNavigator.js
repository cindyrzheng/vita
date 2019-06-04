import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//mport MainTabNavigator from './MainTabNavigator';
import SettingsScreenNavigator from './SettingsScreenNavigator';
import OptionsScreenNavigator from './OptionsNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //Main: MainTabNavigator,
  Settings: SettingsScreenNavigator,
  //Options: OptionsNavigator
  
}));