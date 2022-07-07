import { createContext, ReactNode, useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { register, RegisterParams } from '../api/auth.api';



export type AuthContextState = {
  authenticated: boolean;
  user: null;
};

export type AuthContextType = {
  register: (params: RegisterParams) => Promise<unknown> 
} & AuthContextState;

const initialState = {
  authenticated: false,
  user: null,
};

export const AuthContext = createContext<AuthContextType>({
   ...initialState, 
   register: async () => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [auth] = useState<AuthContextState>(initialState);


  return (
  <AuthContext.Provider 
    value={{
      ...auth,
      register
    }}
    >
      {children}
  </AuthContext.Provider>
  );
};

export default ProtectedRoute;
