import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:7072/rooms/api/v1/'});

const searchRoom = ({capacity, date, startTime, endTime}) => {
  return api.get('rooms', {
    params: {
      capacity,
      date,
      startTime,
      endTime,
    },
  });
};

const bookRoom = (nbPeople, date, startTime, endTime, roomName) => {
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

const cancelBooking = bookingId =>
  api.delete(`users/:email/bookings/${bookingId}`);

let roomApiTokenInterceptor;
export const updateToken = (token, email) => {
  roomApiTokenInterceptor = api.interceptors.request.use(config => {
    config.headers = {Authorization: `Bearer ${token}`};
    config.url = config.url.replace(/:email/g, email);
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
};

export const removeToken = () => {
  api.interceptors.request.eject(roomApiTokenInterceptor);
};

export default {
  searchRoom,
  bookRoom,
  getHistory,
  cancelBooking,
};
