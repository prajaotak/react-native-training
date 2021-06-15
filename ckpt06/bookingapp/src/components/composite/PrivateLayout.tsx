import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../basic/BackButton';
import LogoutButton from '../basic/LogoutButton';

import roomBackground from '../../assets/room.png';

interface Props {
  testID: string;
  titleImage: {uri: string};
  headerBackground?: ImageSourcePropType;
}

const PrivateLayout: React.FC<Props> = ({
  titleImage,
  headerBackground,
  testID,
  children,
}) => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground
        source={headerBackground || roomBackground}
        style={styles.backgroundHeader}>
        <SafeAreaView style={styles.safeArea} testID={testID}>
          <View style={styles.headerButtonRow}>
            <View style={styles.headerButtonCol}>
              <BackButton />
            </View>
            <View style={styles.headerButtonCol}>
              <LogoutButton />
            </View>
          </View>
          <View style={styles.title}>
            <AutoHeightImage source={titleImage} width={250} />
          </View>
        </SafeAreaView>
      </ImageBackground>

      <ScrollView style={styles.container}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundHeader: {
    height: 150,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end', //put all contents to bottom
    // padding: 30,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // padding: 20,
    // paddingBottom: 30,
  },
  container: {
    padding: 20,
    flex: 1,
  },
  headerButtonRow: {
    flexDirection: 'row',
  },
  headerButtonCol: {
    flex: 1,
  },
});

export default PrivateLayout;
