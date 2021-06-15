import React from 'react';
import {StyleSheet, Text, View, GestureResponderEvent} from 'react-native';
import AppButton from './basic/AppButton';
import AppCard from './basic/AppCard';
import AppLabel from './basic/AppLabel';
import {BookingType} from '../types';

interface Props {
  booking: BookingType;
  testID: string;
  onCancel: ((event: GestureResponderEvent) => void) & (() => void);
}

const HistoryItem: React.FC<Props> = ({testID, booking, onCancel}) => {
  return (
    <AppCard testID={testID}>
      <AppLabel text="Booking No" />
      <View style={styles.row}>
        <Text style={styles.col} testID="roomName-text">
          {booking.roomName}
        </Text>
        <Text testID="nbPeople-text">{booking.nbPeople} Guests max</Text>
      </View>

      <View style={styles.row}>
        <Text testID="date-text" style={styles.col}>
          {booking.date}
        </Text>
        <Text testID="time-text">
          {booking.startTime} - {booking.endTime}
        </Text>
      </View>
      <AppButton
        testID="cancel-button"
        text="Cancel"
        variant="danger"
        onPress={onCancel}
      />
    </AppCard>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  col: {
    flex: 1,
  },
});

export default HistoryItem;
