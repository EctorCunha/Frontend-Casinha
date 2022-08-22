import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useInterface } from '@/hooks/useInterface';
import { authService } from '@/services/AuthService';
import { CasinhaApi } from '@/services/CasinhaApi';
import { SplashScreen } from '@/components/SplashScreen';

export function Auth({ children }) {
  const [isLoading, setLoading] = useState(true);
  const { setUserData, logout, login } = useAuth();
  const { addCategories, addProducts } = useInterface();

  const initAuth = async () => {
    let response;
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

    // const categoriesApi = new CasinhaApi('/categories');
    // response = await categoriesApi.getList();
    // addCategories(response.data);

    // const productsApi = new CasinhaApi('/products');
    // response = await productsApi.getList();
    // addProducts(response.data);

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
