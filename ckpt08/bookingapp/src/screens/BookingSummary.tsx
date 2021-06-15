import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import PublicLayout from '../components/composite/PublicLayout';
import TopContainer from '../components/composite/TopContainer';
import BottomContainer from '../components/composite/BottomContainer';

import AutoHeightImage from 'react-native-auto-height-image';
import AppButton from '../components/basic/AppButton';
import TextCard from '../components/basic/TextCard';
import RoomItem from '../components/RoomItem';
import AppLabel from '../components/basic/AppLabel';

import RoomService from '../services/RoomService';

import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {NavigatorParamsList, Routes} from '../routes/Routes';

import bookingSummaryTitle from '../assets/BookingSummary/bookingSummary.png';
import bookingSummaryBackground from '../assets/BookingSummary/bookingSummaryBackground.png';

type NavigationProp = StackNavigationProp<
  NavigatorParamsList,
  Routes.BookingSummary
>;

type BookingSummaryRouteProp = RouteProp<
  NavigatorParamsList,
  Routes.BookingSummary
>;

type Props = {
  navigation: NavigationProp;
  route: BookingSummaryRouteProp;
};

const BookingSummary: React.FC<Props> = ({navigation, route}) => {
  const {criteria, selectedRoom} = route.params;

  const onPressConfirmButton = async () => {
    const {capacity, date, startTime, endTime} = criteria;
    const res = await RoomService.bookRoom(
      capacity,
      date,
      startTime,
      endTime,
      selectedRoom.name,
    );
    navigation.navigate(Routes.Success, {bookingResponse: res.data});
  };

  return (
    <PublicLayout
      testID="bookingSummary-screen"
      background={bookingSummaryBackground}>
      <TopContainer>
        <AutoHeightImage source={bookingSummaryTitle} width={180} />
      </TopContainer>
      <BottomContainer>
        <View style={styles.dtRow}>
          <View style={styles.dCol} testID="date-text">
            <AppLabel text="Date" />
            <TextCard text={criteria.date} />
          </View>
          <View style={styles.tCol} testID="time-text">
            <AppLabel text="Time" />
            <TextCard text={criteria.startTime + ' - ' + criteria.endTime} />
          </View>
        </View>

        <AppLabel text="Selected Room" />
        <RoomItem
          testID="selected-room-button"
          onPress={() => {}}
          room={{
            roomName: selectedRoom.name,
            capacity: selectedRoom.capacity,
          }}
        />

        <AppButton
          testID="cancel-button"
          text="Cancel"
          onPress={() => navigation.goBack()}
        />
        <AppButton
          testID="confirm-button"
          variant="primary"
          text="Confirm Booking"
          onPress={() => onPressConfirmButton()}
        />
      </BottomContainer>
    </PublicLayout>
  );
};

const styles = StyleSheet.create({
  dtRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dCol: {
    paddingRight: 5,
  },
  tCol: {
    flex: 1,
    paddingLeft: 5,
  },
});

export default BookingSummary;
