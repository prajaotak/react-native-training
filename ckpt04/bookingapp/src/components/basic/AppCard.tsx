import {StyleSheet, View} from 'react-native';
import React from 'react';

interface Props { 
  testID?:string
}

const AppCard: React.FC<Props> = ({testID, children}) => {
  return <View testID={testID} style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent:'center',
    
  },
});

export default AppCard;
