import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import AppStorage from '../../utils/AppStorage';
import {useContext} from 'react';
import {UserContext} from '../../context/UserContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {}

const LogoutButton: React.FC<Props> = () => {
  const {removeLoggedUser} = useContext(UserContext);
  const navigation = useNavigation();

  const onPressLogoutButton = async () => {
    await removeLoggedUser();
  };

  return (
    <View style={styles.logoutButtonView}>
      <TouchableOpacity
        onPress={() => onPressLogoutButton()}
        testID="logout-button">
        <Text style={styles.logoutText}>
          Logout <Icon name="sign-out" size={16} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutButtonView: {
    alignItems: 'flex-end',
  },
  logoutText: {
    color: 'white',
  },
  container: {
    padding: 30,
    flex: 1,
  },
});

export default LogoutButton;
