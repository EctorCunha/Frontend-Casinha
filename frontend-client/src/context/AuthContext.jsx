import { createContext, useState } from 'react';
import { authService } from '@/services/AuthService';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const data = await authService.loginWithEmailAndPassword(email, password);

    if (data.token && data.user) {
      localStorage.setItem('accessToken', data.token);
      setUser(data.user);
    }
  }

  function logout() {
    authService.logout();
    localStorage.removeItem('accessToken');
    setUser(null);
  }

  function setUserData(data) {
    setUser(data);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
