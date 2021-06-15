import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';



export enum Routes {
  Landing = "Landing",
  Login = "Login",
  SignUp = "SignUp",
}

export type NavigatorParamsList = {
  [Routes.Landing]: undefined;
  [Routes.Login]: undefined;
  [Routes.SignUp]: undefined;
}

const Stack = createStackNavigator<NavigatorParamsList>();

export const Navigator: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name={Routes.Landing} component={Landing} />
          <Stack.Screen name={Routes.Login} component={Login} />
          <Stack.Screen name={Routes.SignUp} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}