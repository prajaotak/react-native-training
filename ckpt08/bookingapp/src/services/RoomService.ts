import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig} from 'axios';
const api = axios.create({baseURL: 'http://10.0.2.2:7072/rooms/api/v1/'});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = await AsyncStorage.getItem('token');
  const email = (await AsyncStorage.getItem('email')) || '';
  if (!token) return config;
  config.headers = {Authorization: `Bearer ${token}`};
  config.url = config.url?.replace(/:email/g, email);
  if (config.data) {
    const matchKey = Object.keys(config.data).find(
      k => config.data[k] === '$email',
    );
    if (matchKey) {
      config.data = {
        ...config.data,
        [matchKey]: email,
      };
    }
  }
  return config;
});

const searchRoom = (
  capacity: number,
  date: string,
  startTime: string,
  endTime: string,
) => {
  return api.get('rooms', {
    params: {
      capacity,
      date,
      startTime,
      endTime,
    },
  });
};

const bookRoom = (
  nbPeople: number,
  date: string,
  startTime: string,
  endTime: string,
  roomName: string,
) => {
  return api.post(`users/:email/bookings`, {
    date,
    startTime,
    endTime,
    roomName,
    nbPeople,
    userId: '$email',
  });
};

const getHistory = () => {
  return api.get(`users/:email/bookings`);
};

const cancelBooking = (bookingId: string) =>
  api.delete(`users/:email/bookings/${bookingId}`);

export default {
  searchRoom,
  bookRoom,
  getHistory,
  cancelBooking,
};
