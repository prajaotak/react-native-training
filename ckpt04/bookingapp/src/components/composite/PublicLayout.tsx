import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
  ImageSourcePropType
} from 'react-native';

import landingBackground from '../../assets/landing.png';

interface Props {
  testID: string;
  background?: ImageSourcePropType,
}

const PublicLayout: React.FC<Props> = ({background, testID, children}) => {
  return (
    <ImageBackground testID={testID} source={background||landingBackground} style={styles.background}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.darkenContainer}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  darkenContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default PublicLayout;
