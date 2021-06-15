import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:7071/users/api/v1/'});

const login = ({email, password}) => {
  return api.post('users/login', {
    login: email,
    password,
  });
};

const signUp = ({firstName, lastName, email, password}) => {
  return api.post('users', {
    firstName,
    lastName,
    email,
    password,
  });
};

export default {
  login,
  signUp,
};
