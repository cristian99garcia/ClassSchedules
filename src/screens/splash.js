import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Consts from '../utils/consts';
import Storage from '../utils/storage';

export default class SplashScreen extends React.Component {

  static navigationOptions() {
    return {
      header: null,
    };
  }

  async componentDidMount() {
    const {
      visibleDays: visibleDaysKey,
      visibleHours: visibleHoursKey,
    } = Storage.Keys;

    const {
      MONDAY:    MON,
      TUESDAY:   TUE,
      WEDNESDAY: WED,
      THURSDAY:  THU,
      FRIDAY:    FRI,
    } = Consts.Days;

    const defaultValues = {
      [visibleDaysKey]: JSON.stringify([ MON, TUE, WED, THU, FRI ]),
      [visibleHoursKey]: '{"start":7,"end":18}',
    };

    let data = await Storage.getMultipleValues([visibleDaysKey, visibleHoursKey], defaultValues);

    this.props.navigation.reset([
      NavigationActions.navigate({
        routeName: 'Home',
        params: {
          visibleDays: JSON.parse(data[visibleDaysKey]),
          visibleHours: JSON.parse(data[visibleHoursKey]),
        },
      })
    ], 0);
  }

  render() {
    return (
      <View />
    );
  }
}