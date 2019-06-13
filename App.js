import React from 'react';
import {
  Easing,
  Animated,
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import i18n from './src/i18n';
import Primitives from './src/utils/primitives';

import HomeScreen from './src/screens/home';
import EditClassScheduleScreen from './src/screens/edit-class-schedule';

let App = createAppContainer(createStackNavigator({
  Home: { screen: HomeScreen },
  EditClassSchedule: { screen: EditClassScheduleScreen },
}));

export default App;
