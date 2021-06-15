import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  KeyboardTypeOptions
} from 'react-native';

interface Props {
  testID: string;
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const AppTextInput: React.FC<Props> = ({title, value, onChangeText, secureTextEntry, keyboardType, testID}) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{title}</Text>
      <TextInput
        testID={testID}
        style={styles.textInput}
        placeholder={title}
        value={value}
        editable
        keyboardType={keyboardType||'default'}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry ?? secureTextEntry}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    marginLeft: 6,
    marginBottom: 3,
    fontSize: 16,
    fontFamily: "open sans",
    color: '#706F68'
  },
  textInput: {
    height: 60,
    marginBottom: 10,
    paddingLeft: 26,
    paddingRight: 26,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "open sans",
  },
});

export default AppTextInput;
