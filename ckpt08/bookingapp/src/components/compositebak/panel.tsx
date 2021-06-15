import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';


interface PanelProps {
  height: number;
}

export const Panel: React.FC<PanelProps> = ({ height, children }) => {
  return (
    <View style={[styles.contentContainer, {height: height}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 48,
    paddingLeft: 22,
    paddingRight: 22
  },
});