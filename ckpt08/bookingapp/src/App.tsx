import 'react-native-gesture-handler';

import React, {useContext, useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {setCustomText} from 'react-native-global-props';

import {UserContext} from './context/UserContext';
import {Navigator} from './routes/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const customTextProps = {
  style: {
    fontSize: 16,
  },
};

const App = () => {
  const [appReady, setAppReady] = useState(false);
  const {token, setLoggedUser} = useContext(UserContext);
  setCustomText(customTextProps);

  useEffect(() => {
    const checkLoggedUser = async () => {
      const storedToken = (await AsyncStorage.getItem('token')) ?? '';

      const storedEmail = (await AsyncStorage.getItem('email')) ?? '';
      if (storedToken !== null && storedToken !== '') {
        await setLoggedUser(storedEmail, storedToken);
      }
      setAppReady(true);
    };
    checkLoggedUser();
  }, []);

  return (
    <SafeAreaProvider>
      <Navigator isLoggedIn={!!token && token != ''} />
    </SafeAreaProvider>
  );
};

export default App;
