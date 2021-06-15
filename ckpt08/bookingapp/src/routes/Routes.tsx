import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import FindRoom from '../screens/FindRoom';
import SelectRoom from '../screens/SelectRoom';
import History from '../screens/History';
import Success from '../screens/Success';
import BookingSummary from '../screens/BookingSummary';
// import FindRoom from '../pages/FindRoom';
// import RoomResult from '../pages/RoomResult';
// import BookingSummary from '../pages/BookingSummary';
// import MyBooking from '../pages/MyBooking';

export enum Routes {
  Landing = "Landing",
  Login = "Login",
  SignUp = "SignUp",
  FindRoom = "FindRoom",
  // RoomResult = "RoomResult",
  BookingSummary = 'BookingSummary',
  History = 'History',
  Success = 'Success',
  SelectRoom = 'SelectRoom'
}

export type NavigatorParamsList = {
  [Routes.Landing]: undefined;
  [Routes.Login]: undefined;
  [Routes.SignUp]: undefined;
  [Routes.FindRoom]: undefined;
  // [Routes.RoomResult]: {date: string, startTime: string, endTime: string};
  [Routes.SelectRoom]: {criteria: {capacity: number, date: string, startTime: string, endTime: string}, results: {capacity: number, name: string}[]};
  [Routes.BookingSummary]: {criteria: {capacity: number, date: string, startTime: string, endTime: string}, selectedRoom: {capacity: number, name: string}};
  [Routes.Success]: {bookingResponse: {userId: string, bookingId: string, date: string, startTime: string, endTime: string, nbPeople: number, roomName: string}};
  [Routes.History]: undefined;
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
            <Stack.Screen name={Routes.SelectRoom} component={SelectRoom} />
            <Stack.Screen name={Routes.BookingSummary} component={BookingSummary} />
            <Stack.Screen name={Routes.Success} component={Success} />
            <Stack.Screen name={Routes.History} component={History} />
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