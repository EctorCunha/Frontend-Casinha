import { Link, useNavigate } from 'react-router-dom';
import { Drawer, IconButton, Typography } from '@mui/material';
import {
  Close as CloseIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import { useAuth } from '@/hooks/useAuth';
import { useInterface } from '@/hooks/useInterface';
import { DrawerHeader, DrawerContent, DrawerFooter } from './styles';

export function MobileDrawer({ open, onClose }) {
  const { user, logout } = useAuth();
  const { addGlobalMessage } = useInterface();
  const navigate = useNavigate();

  const isLoginPage = window.location.pathname === '/login';
  const isRegisterPage = window.location.pathname === '/register';

  function handleLogout(event) {
    event.preventDefault();
    logout();
    addGlobalMessage('Sessão finalizada', 'success');
    navigate('/');
    onClose();
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <DrawerHeader>
        <IconButton aria-label='Abrir menu' size="small" onClick={onClose}>
          <CloseIcon aria-label='Fechar menu' />
        </IconButton>
        {user ? (
          <Typography>
            Olá, <br />
            {user.firstName} {user.lastName}
          </Typography>
        ) : (
          <Typography>Menu</Typography>
        )}
      </DrawerHeader>
      <DrawerContent>
        {user ? (
          <>
            <Link to="/minhas-reservas" onClick={onClose}>
              Minhas Reservas
            </Link>
            <Link to="/favoritos" onClick={onClose}>
              Favoritos
            </Link>
            <Link to="/reviews" onClick={onClose}>
              Reviews
            </Link>
            <Link to="/" onClick={handleLogout}>
              Sair
            </Link>
          </>
        ) : (
          <>
            {!isRegisterPage && (
              <Link to="/register" onClick={onClose}>
                Criar conta
              </Link>
            )}
            {!isLoginPage && (
              <Link to="/login" onClick={onClose}>
                Fazer login
              </Link>
            )}
          </>
        )}
      </DrawerContent>
      <DrawerFooter>
        <a href="//facebook.com" target="_blank">
          <FacebookIcon />
        </a>
        <a href="//linkedin.com" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="//twitter.com" target="_blank">
          <TwitterIcon />
        </a>
        <a href="//instagram.com" target="_blank">
          <InstagramIcon />
        </a>
      </DrawerFooter>
    </Drawer>
  );
}
