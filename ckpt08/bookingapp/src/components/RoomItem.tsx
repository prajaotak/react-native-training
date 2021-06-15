import React from 'react';
import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface Props {
  room: {roomName: string; capacity: number};
  testID: string;
  onPress: ((event: GestureResponderEvent) => void) & (() => void);
}

const RoomItem: React.FC<Props> = ({testID, room, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID={testID}>
      <View style={styles.colLeft}>
        <Text style={styles.roomName}>{room?.roomName}</Text>
      </View>
      <View style={styles.colRight}>
        <Text style={styles.capacity}>{room?.capacity} Guests max</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  colLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  colRight: {
    justifyContent: 'center',
  },
  roomName: {
    fontWeight: 'bold',
  },
  capacity: {
    alignSelf: 'flex-end',
  },
});
export default RoomItem;
