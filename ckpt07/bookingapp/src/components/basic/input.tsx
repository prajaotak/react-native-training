import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

interface InputProps {
  testID: string;
  type?: "password" | undefined
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const Input: React.FC<InputProps> = ({ testID: id, type, label, value, onChangeText }) => {
  const [isHidden, setHidden] = React.useState(true);

  return (
    <>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        testID={id}
        style={styles.input}
        secureTextEntry={type === 'password' ? isHidden : false}
        onChangeText={onChangeText}
        placeholder={label}
        value={value}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    marginBottom: 10,
    paddingLeft: 26,
    paddingRight: 26,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "open sans",
  },
  label: {
    marginLeft: 6,
    marginBottom: 3,
    fontSize: 16,
    fontFamily: "open sans",
    color: '#706F68'
  }
});
