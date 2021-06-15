import React from 'react';
import {
  ImageBackground,
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
        <View style={styles.darkenContainer}>
          {children}
        </View>
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
