import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigatorParamsList, Routes} from '../routes/Routes';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.FindRoom>;

type Props = {
  navigation: NavigationProp;
};

const FindRoom: React.FC<Props> = ({navigation}) => {
  return (
    <View testID="find-room-screen">
      <Text>Find Room</Text>
    </View>
  );
};
export default FindRoom;
