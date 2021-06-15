import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, Component} from 'react';

export const UserContext = React.createContext({
  email: '',
  token: '',
  setLoggedUser: (email: string, token: string) => {},
  removeLoggedUser: () => {},
});

const UserContextProvider: React.FC = ({children}) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const setLoggedUser = async (email: string, token: string) => {
    setEmail(email);
    setToken(token);
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('email', email);
  };

  const removeLoggedUser = async () => {
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('token');
    setEmail('');
    setToken('');
  };

  return (
    <UserContext.Provider
      value={{
        email: email,
        token: token,
        setLoggedUser: setLoggedUser,
        removeLoggedUser: removeLoggedUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

// const UserContextProvider: React.FC = ({children}) => {
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');

//   const setLoggedUser = async(email: string, token: string) => {
//     setEmail(email);
//     setToken(token);
//     await AsyncStorage.setItem('token', token);
//     await AsyncStorage.setItem('email', email);
//     updateToken(token, email);
//   };

//   const removeLoggedUser = async () => {
//     await AsyncStorage.removeItem('email');
//     await AsyncStorage.removeItem('token');
//     setEmail('');
//     setToken('');
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         email: email,
//         token: token,
//         setLoggedUser: setLoggedUser,
//         removeLoggedUser: removeLoggedUser,
//       }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

export default UserContextProvider;
