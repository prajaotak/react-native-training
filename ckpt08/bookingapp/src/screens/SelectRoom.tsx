import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppLabel from '../components/basic/AppLabel';
import PrivateLayout from '../components/composite/PrivateLayout';
import RoomItem from '../components/RoomItem';
import TextCard from '../components/basic/TextCard';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { NavigatorParamsList, Routes } from '../routes/Routes';

import selectMeetingRoom from '../assets/SelectMeetingRoom/selectMeetingRoom.png';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.SelectRoom>;
type SelectRoomRouteProp = RouteProp<NavigatorParamsList, Routes.SelectRoom>;

type Props = {
  navigation: NavigationProp;
  route: SelectRoomRouteProp;
};

const SelectRoom: React.FC<Props> = ({ navigation, route}) => {
  const {criteria, results} = route.params;

  return (
    <PrivateLayout testID='selectRoom-screen' titleImage={selectMeetingRoom}>
      <View style={styles.dtRow}>
        <View style={styles.dCol} testID="date-container">
          <AppLabel text="Date" />
          <TextCard testID="date-text" text={criteria.date} />
        </View>
        <View style={styles.tCol} testID="time-container">
          <AppLabel text="Time" />
          <TextCard testID="time-text" text={criteria.startTime + ' - ' + criteria.endTime} />
        </View>
      </View>
      <View style={{paddingBottom: 50}} >
        <AppLabel text="Available Room" />
        {results.map((item: {name: string, capacity: number}) => (
          <RoomItem
            key={item.name}
            testID="roomItem-button"
            room={{roomName: item.name, ...item}}
            onPress={() => navigation.navigate(Routes.BookingSummary, { 
              criteria: criteria, 
              selectedRoom: {name: item.name, capacity: item.capacity
            }})}
          />
        ))}
      </View>
    </PrivateLayout>
  );
};

const styles = StyleSheet.create({
  dtRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dCol: {
    flex: 0.8,
    paddingRight: 5,
  },
  tCol: {
    flex: 1,
    paddingLeft: 5,
  },
});

export default SelectRoom;
