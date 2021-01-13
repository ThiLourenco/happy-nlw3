import React, { createContext, useEffect, useState} from 'react';
import { asyncSignInService } from '../services/auth';

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  token: string | null;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storagedToken = localStorage.getItem('web:token');

    if (storagedToken) {
      setToken(storagedToken);
      setLoading(false);
    }
  }, []);

  async function signIn(username: string, password:string) {
    const response = await asyncSignInService(username, password);

    console.log(response.data.token);
    setToken(response.data.token);

    localStorage.setItem('web:token', response.data.token);
  }

  function signOut() {
    setToken(null);
    localStorage.removeItem('web:token');
  }

  return (
    <AuthContext.Provider value={{signed: Boolean(token), token, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;