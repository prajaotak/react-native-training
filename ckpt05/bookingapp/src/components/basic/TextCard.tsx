import React from 'react';
import { Text } from 'react-native';
import AppCard from './AppCard';

interface Props {
  testID?: string
  text: string;
}

const TextCard: React.FC<Props> = ({testID, text}) => {
  return (
    <AppCard>
      <Text testID={testID} style={{alignSelf:'center'}}>{text}</Text>
    </AppCard>
  );
};


export default TextCard;
