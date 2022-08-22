import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function AuthGuard({ children }) {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
}
