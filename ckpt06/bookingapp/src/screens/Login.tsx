import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigatorParamsList, Routes} from '../routes/Routes';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.SignUp>;

type Props = {
  navigation: NavigationProp;
};

const Login: React.FC<Props> = ({navigation}) => {
  return (
    <View testID="login-screen">
      <Text>Login</Text>
    </View>
  );
};
export default Login;
