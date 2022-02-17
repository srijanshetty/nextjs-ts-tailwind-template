import { createContext, useState, useContext } from 'react';

//api here is an axios instance which has the baseURL set according to the env.
// import api from '../services/api';

type User = null | { [key: string]: unknown };

type useContextType = {
  user: User;
  setUser: (user: User) => void;
};

const AuthContext = createContext<useContextType>({
  user: null,
  setUser: (_data: User) => {
    throw Error('Application not ready');
  },
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<useContextType>(AuthContext);
