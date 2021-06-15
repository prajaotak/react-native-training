import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
interface LayoutProps {
  testID: string;
  backgroundImage: ImageSourcePropType;
}

export const BasicLayLout: React.FC<LayoutProps> = ({
  testID,
  backgroundImage,
  children,
}) => {
  return (
    <SafeAreaView testID={testID} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{height: '100%'}}>
        <ImageBackground
          source={backgroundImage}
          style={styles.bgImageContainer}
          imageStyle={styles.bgImage}>
          {children}
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bgImageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    opacity: 0.8,
  },
});
