import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import FindRoom from '../screens/FindRoom';

export enum Routes {
  Landing = "Landing",
  Login = "Login",
  SignUp = "SignUp",
  FindRoom = "FindRoom",
}

export type NavigatorParamsList = {
  [Routes.Landing]: undefined;
  [Routes.Login]: undefined;
  [Routes.SignUp]: undefined;
  [Routes.FindRoom]: undefined;
}

const Stack = createStackNavigator<NavigatorParamsList>();

export const Navigator: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name={Routes.FindRoom} component={FindRoom} />
          </>
        ) : (
          <>
            <Stack.Screen name={Routes.Landing} component={Landing} />
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.SignUp} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}