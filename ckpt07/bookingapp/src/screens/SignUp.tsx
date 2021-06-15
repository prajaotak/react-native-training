import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import titleImage from '../assets/SignUp/title.png';
import AppButton from '../components/basic/AppButton';
import BackButton from '../components/basic/BackButton';
import {Input} from '../components/basic/input';
import BottomContainer from '../components/composite/BottomContainer';
import PublicLayout from '../components/composite/PublicLayout';
import TopContainer from '../components/composite/TopContainer';
import {NavigatorParamsList, Routes} from '../routes/Routes';
import UserService from '../services/UserService';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.SignUp>;

type Props = {
  navigation: NavigationProp;
};

const SignUp: React.FC<Props> = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onPressSignUpButton = async () => {
    const res = await UserService.signUp(firstName, lastName, email, password);
    if (res.status === 201) navigation.navigate(Routes.Login);
    // Add alert message after sign up successfully
  };

  return (
    <PublicLayout testID="signUp-screen">
      <TopContainer>
        <BackButton />
        <AutoHeightImage source={titleImage} width={270} />
      </TopContainer>

      <BottomContainer>
        <KeyboardAvoidingView>
          <Input
            testID="firstName-input"
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}></Input>
          <Input
            testID="lastName-input"
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}></Input>
          <Input
            testID="email-input"
            label="Email"
            value={email}
            onChangeText={setEmail}></Input>
          <Input
            testID="password-input"
            label="Password"
            value={password}
            onChangeText={setPassword}></Input>

          <AppButton
            testID="signUp-button"
            variant="primary"
            text="Create Account"
            onPress={() => onPressSignUpButton()}></AppButton>
        </KeyboardAvoidingView>
      </BottomContainer>
    </PublicLayout>
  );
};

export default SignUp;