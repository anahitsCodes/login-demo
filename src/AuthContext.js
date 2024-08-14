import {createContext, useContext, useEffect, useState} from "react";
import {fetchMe, loginApi} from "./api";

const AuthContext = createContext(undefined);

export function AuthProvider({children}) {

  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState('idle')

  useEffect(() => {
    async function initUser() {
      if (token) {
        setLoadingStatus('loading')
        try {
          const data = await fetchMe(token);

          setUser(data)
        } catch (err) {
          setToken(null);
          localStorage.removeItem('token');
        } finally {
          setLoadingStatus('loaded')
        }
      } else {
        setLoadingStatus('loaded')
      }
    }

    initUser()
  }, [token]);

  const login = async (username, password) => {
    try {
      setLoadingStatus('loading')
      const data = await loginApi(username, password)

      setToken(data.token);
      localStorage.setItem('token', data.token);
      setUser(data);
    } finally {
      setLoadingStatus('loaded')
    }
  };


  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  const isLoading = loadingStatus === 'loading'
  const isIdle = loadingStatus === 'idle'
  const isLoaded = loadingStatus === 'loaded'

  return (
    <AuthContext.Provider value={{token, user, login, logout, isLoading, isIdle, isLoaded}}>
      {isIdle ? null : children}
    </AuthContext.Provider>

  )
}

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used withing AuthProvider')
  }

  return authContext
}
