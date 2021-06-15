import React from 'react';
import {View, StyleSheet, ScrollView, 
  KeyboardAvoidingView,
  Platform
} from 'react-native';

interface Props {}

const BottomContainer: React.FC<Props> = ({children}) => {
  return (
    <View style={{...styles.bottomContainer}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: 'white',
    resizeMode: 'cover',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'flex-end', //put all contents to bottom
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 15,
  },
});

export default BottomContainer;
