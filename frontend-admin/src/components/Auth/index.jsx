import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { authService } from '@/services/AuthService';
import { SplashScreen } from '@/components/SplashScreen';

export function Auth({ children }) {
  const [isLoading, setLoading] = useState(true);
  const { setUserData, logout } = useAuth();

  const initAuth = async () => {
    authService.handleAuthentication();

    if (authService.isAuthenticated()) {
      try {
        const user = await authService.loginInWithToken().catch(error => {
          throw error;
        });
        if (user) {
          setUserData(user);
        }
      } catch {
        logout();
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    initAuth();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return children;
}
