import { createContext, ReactNode, useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { register, RegisterParams, login, LoginParams } from '../api/auth.api';
import { User, UserData } from "../types/user.types";
import { ErrorPayload, HTTPStatusCodes, ResponsePayload } from "../types/request.type";
import { getTokenFromLocalStorage, setTokenToLocalStorage } from "../utils/common";



export type AuthContextState = UserData & {
  authenticated: boolean;
};

export type AuthContextType = {  
  register: (params: RegisterParams) => Promise<void | ErrorPayload> 
  login: (params: LoginParams) => Promise<void | ErrorPayload>;
} & AuthContextState;

const initialState = {
  authenticated: false,
  token: null,
  user: null,
};

export const AuthContext = createContext<AuthContextType>({
   ...initialState, 
   register: async () => {},
   login: async () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthContextState>(() => {
    const storedToken = getTokenFromLocalStorage();
    return { ...initialState, token: storedToken };
  });

  const handleRegister = async (params: RegisterParams) : Promise<void | ErrorPayload> => {
    const result = await register(params);

    if (result.status === HTTPStatusCodes.CREATED) {
      return;
    }

    return result as ErrorPayload;
  };

  const handleLogin = async (params: LoginParams): Promise<void | ErrorPayload> => {
    const result = await login(params);

    if (result.status === HTTPStatusCodes.OK ) {
      const { user, token } = (result as ResponsePayload<UserData>).data;

      setTokenToLocalStorage(token as string); 

      setAuth((prevAuth) => ({
        ...prevAuth,
        user,
        token
      }))
    }

    return result as ErrorPayload;
  };



  return (
  <AuthContext.Provider 
    value={{
      ...auth,
      login: handleLogin,
      register: handleRegister 
    }}
    >
      {children}
  </AuthContext.Provider>
  );
};

export default ProtectedRoute;
