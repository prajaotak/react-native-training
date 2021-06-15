import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigatorParamsList, Routes } from '../routes/Routes';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.SignUp>;

type Props = {
  navigation: NavigationProp;
};

const SignUp: React.FC<Props> = ({navigation}) => {
  return (
    <View><Text>Sign up</Text></View>
  );
};


export default SignUp;
