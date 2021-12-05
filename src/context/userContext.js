import { createContext } from 'react';

const UserContext = createContext({
  isLoggedIn: false,
  userId:null,
  token:null,
  login: (uid,token) => {},
  logout: () => {}
});

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer, UserContext}