import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  text: string;
}

const AppLabel: React.FC<Props> = ({text}) => {
  return <Text style={styles.label}>{text}</Text>;
};
const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default AppLabel;
