import React from 'react';
import {Text, StyleSheet, GestureResponderEvent} from 'react-native';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const colors = {
  primary: '#5cc99b',
  danger: '#ea5c65',
};

interface Props {
  testID: string;
  text: string;
  variant?: string;
  onPress: ((event: GestureResponderEvent) => void) & (() => void); 
}

const AppButton: React.FC<Props> = ({onPress, text, variant, testID}) => {
  let backgroundColor = colors.primary;
  let borderColor = colors.primary;
  let textColor = 'white';

  // select color
  for (const [key, value] of Object.entries(colors)) {
    if (variant?.includes(key)) {
      backgroundColor = value;
      borderColor = value;
      break;
    }
  }

  //switch color
  if (variant && variant.indexOf('outline') > 0) {
    const bgColorTemp = backgroundColor;
    backgroundColor = textColor;
    textColor = bgColorTemp;
  }

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={{...styles.appButtonContainer, backgroundColor, borderColor}}>
      <Text style={[styles.appButtonText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  appButtonText: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default AppButton;
