import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

import AppButton from '../components/basic/AppButton';
import AppTextInput from '../components/basic/AppTextInput';
import PrivateLayout from '../components/composite/PrivateLayout';
import RoomService from '../services/RoomService';

import {StackNavigationProp} from '@react-navigation/stack';

import {NavigatorParamsList, Routes} from '../routes/Routes';

import makeMyBooking from '../assets/FindRoom/makeMyBooking.png';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.FindRoom>;

type Props = {
  navigation: NavigationProp;
};

const FindRoom: React.FC<Props> = ({navigation}) => {
  const [nbPeople, setNbPeople] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const onPressFindRoomButton = async () => {
    const res = await RoomService.searchRoom(
      +nbPeople,
      date,
      startTime,
      endTime,
    );

    const criteria = {
      capacity: +nbPeople,
      date,
      startTime,
      endTime,
    };

    navigation.navigate(Routes.SelectRoom, {criteria, results: res.data});
  };

  return (
    <PrivateLayout titleImage={makeMyBooking} testID="find-room-screen">
      <TouchableOpacity
        testID="myBookings-button"
        onPress={() => navigation.navigate(Routes.History)}>
        <Text style={styles.myBookingsButton}>
          <Icon name="calendar" size={18} color="black" /> My Bookings
        </Text>
      </TouchableOpacity>
      <AppTextInput
        testID="nbPeople-input"
        title="Number of Guest"
        value={nbPeople + ''}
        keyboardType="number-pad"
        onChangeText={text => setNbPeople(text)}
      />
      <AppTextInput
        testID="date-input"
        title="Date"
        keyboardType="number-pad"
        value={date}
        onChangeText={setDate}
      />
      <AppTextInput
        testID="startTime-input"
        title="Start Time"
        keyboardType="number-pad"
        value={startTime}
        onChangeText={setStartTime}
      />
      <AppTextInput
        testID="endTime-input"
        title="End Time"
        value={endTime}
        keyboardType="number-pad"
        onChangeText={setEndTime}
      />

      <AppButton
        testID="findRoom-button"
        variant="primary"
        text="Find Room"
        onPress={() => onPressFindRoomButton()}
      />
    </PrivateLayout>
  );
};

const styles = StyleSheet.create({
  myBookingsButton: {
    fontSize: 18,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});

export default FindRoom;
