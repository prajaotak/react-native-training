import React from 'react';
import 'react-native-gesture-handler';
import {setCustomText} from 'react-native-global-props';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigator} from './routes/Routes';

const customTextProps = {
  style: {
    fontSize: 16,
  },
};

const App = () => {
  setCustomText(customTextProps);

  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
