import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async value => {
  await AsyncStorage.setItem('token', value);
};
const getToken = async () => {
  const value = await AsyncStorage.getItem('token');
  return value;
};
const removeToken = async () => {
  await AsyncStorage.removeItem('token');
};
export default {
  storeToken,
  getToken,
  removeToken,
};
