import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import AppButton from '../components/basic/AppButton';
import AppLabel from '../components/basic/AppLabel';
import HistoryItem from '../components/HistoryItem';
import PrivateLayout from '../components/composite/PrivateLayout';
import RoomService from '../services/RoomService';
import historyTitle from './../assets/History/title.png';

import {BookingType} from '../types';
import {StackNavigationProp} from '@react-navigation/stack';

import {NavigatorParamsList, Routes} from '../routes/Routes';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.History>;

type Props = {
  navigation: NavigationProp;
};

const History: React.FC<Props> = ({navigation}) => {
  const [rooms, setRooms] = useState([]);
  const loadData = async () => {
    const res = await RoomService.getHistory();
    setRooms(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const onPressCancelButton = async (bookingId: string) => {
    await RoomService.cancelBooking(bookingId);
    await loadData();
  };

  return (
    <PrivateLayout testID="history-screen" titleImage={historyTitle}>
      {rooms?.length > 0 ? <AppLabel text="Reserved" /> : null}
      {rooms.map((item: BookingType) => (
        <HistoryItem
          testID="historyItem-button"
          key={item.bookingId}
          booking={item}
          onCancel={() => onPressCancelButton(item.bookingId)}
        />
      ))}

      <AppButton
        testID="newBooking-button"
        text="Make New Booking"
        variant="primary"
        onPress={() => navigation.push(Routes.FindRoom)}
      />
    </PrivateLayout>
  );
};

export default History;
