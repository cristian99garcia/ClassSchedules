
import React from 'react';

import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import i18n from './src/i18n';

import TimetablesScreen from './src/screens/timetables';
import TestsScreen from './src/screens/tests';
import SettingsScreen from './src/screens/settings';

import { Consts } from './src/utils';

let consts = new Consts();

let tabNavigator = createMaterialBottomTabNavigator({
  Timetables: {
    screen: TimetablesScreen,
    navigationOptions: {
      tabBarLabel: i18n.t('timetables'),
      tabBarColor: consts.Colors.primary,
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon size={ 25 } name={ 'calendar-multiselect' } style={{ color: '#fff' }} />
      )
    },
  },

  Tests: {
    screen: TestsScreen,
    navigationOptions: {
      tabBarLabel: i18n.t('tests'),
      tabBarColor: consts.Colors.tests,
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon size={ 25 } name={ 'pencil' } style={{ color: '#fff' }} />
      )
    }
  },

  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: i18n.t('settings'),
      tabBarColor: consts.Colors.settings,
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon size={ 25 } name={ 'settings' } style={{ color: '#fff' }} />
      )
    }
  }
},
{
  activeTintColor: '#fff',
  shifting: true,
});

tabNavigator.navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: consts.Colors.primary,
    }
  }
}

let App = createAppContainer(createStackNavigator({
  Home: { screen: tabNavigator },
}));

export default App;
