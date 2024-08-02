import { createContext } from 'react';

const defaultState = { 
    isLoginScreen: 'login',
    toggleScreen: (value: string) => {},
    btnClose: () => {}
};

const AuthContext = createContext(defaultState);

export default AuthContext;
  

