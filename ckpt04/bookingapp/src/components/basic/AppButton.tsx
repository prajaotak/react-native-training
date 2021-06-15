import React from 'react';
import {StyleSheet, Text, GestureResponderEvent} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
  testID: string;
  variant?: 'primary' | 'danger' | undefined;
  onPress: ((event: GestureResponderEvent) => void) & (() => void);
  text: string;
}

interface Props {
  testID: string;
  text: string;
  variant?: string;
  onPress: ((event: GestureResponderEvent) => void) & (() => void);
}

const AppButton: React.FC<Props> = ({onPress, text, variant, testID}) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={
        variant === 'primary'
          ? styles.primaryButton
          : variant === 'danger'
          ? {
              ...styles.defaultButton,
              backgroundColor: '#ea5c65',
              borderColor: '#ea5c65',
            }
          : styles.defaultButton
      }
      onPress={onPress}>
      <Text
        style={
          variant === 'primary' || variant === 'danger'
            ? styles.primaryText
            : styles.defaultText
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    height: 75,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#5CC99B',
    borderRadius: 10,
    paddingTop: 25,
  },
  primaryText: {
    fontSize: 16,
    fontFamily: 'open sans',
    fontWeight: '700',
    color: 'white',
  },
  defaultButton: {
    height: 75,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#5CC99B',
    borderRadius: 10,
    borderWidth: 1,
    paddingTop: 25,
  },
  defaultText: {
    fontSize: 16,
    fontFamily: 'open sans',
    fontWeight: '700',
    color: '#5CC99B',
  },
});
export default AppButton;
