import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import AppButton from '../components/basic/AppButton';

import bookingSummaryBackground from '../assets/BookingSummary/bookingSummaryBackground.png';
import title from './../assets/Success/title.png';

import {StackNavigationProp} from '@react-navigation/stack';

import {NavigatorParamsList, Routes} from '../routes/Routes';
import {RouteProp} from '@react-navigation/native';
import PublicLayout from '../components/composite/PublicLayout';
import TopContainer from '../components/composite/TopContainer';
import BottomContainer from '../components/composite/BottomContainer';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.Success>;

type SuccessRouteProp = RouteProp<NavigatorParamsList, Routes.Success>;

type Props = {
  navigation: NavigationProp;
  route: SuccessRouteProp;
};

const Success: React.FC<Props> = ({route, navigation}) => {
  const {bookingResponse} = route.params;

  return (
    <PublicLayout testID="success-screen" background={bookingSummaryBackground}>
      <TopContainer>
        <View style={styles.container}>
          <AutoHeightImage
            style={styles.successImage}
            source={title}
            width={150}
          />
          <Text style={styles.message}>Your Booking No. is</Text>
          <Text testID="bookingId-text" style={styles.message}>
            {bookingResponse?.bookingId}
          </Text>
        </View>
      </TopContainer>
      <BottomContainer>
        <AppButton
          variant="primary"
          testID="history-button"
          onPress={() => navigation.navigate(Routes.History)}
          text="My Booking History"></AppButton>
      </BottomContainer>
    </PublicLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successImage: {
    marginBottom: 50,
  },
  message: {
    color: 'white',
  },
});

export default Success;
