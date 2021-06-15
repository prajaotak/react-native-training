import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
interface Props {}

const TopContainer: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    padding: 30,
  },
});

export default TopContainer;
