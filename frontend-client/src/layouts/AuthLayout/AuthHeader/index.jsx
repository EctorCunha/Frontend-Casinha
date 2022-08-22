import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Logo } from '@/components/Logo';
import { MobileDrawer } from '@/components/MobileDrawer';
import { useAuth } from '@/hooks/useAuth';
import { useInterface } from '@/hooks/useInterface';
import { Wrapper, LogoContainer, UserBlock } from './styles';

export function AuthHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { addGlobalMessage } = useInterface();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isLoginPage = window.location.pathname === '/login';
  const isRegisterPage = window.location.pathname === '/register';
  const isSmallScreen = useMediaQuery('(max-width: 500px)');

  return (
    <>
      <Wrapper
        position="sticky"
        elevation={1}
        sx={{ backgroundColor: 'primary.main' }}
      >
        <Toolbar>
          <LogoContainer>
            <Link to="/">
              <Logo color="white" />
            </Link>
          </LogoContainer>
          {isSmallScreen ? (
            <IconButton
              onClick={() => setDrawerIsOpen(true)}
              sx={{
                fontSize: '36px',
                marginLeft: 'auto',
                svg: { width: '36px' },
              }}
            >
              <MenuIcon fontSize="36px" sx={{ color: 'white' }} />
            </IconButton>
          ) : (
            <UserBlock>
              {user ? (
                <>
                  <Typography>
                    Olá, <br />
                    <strong>
                      {user.firstName} {user.lastName}
                    </strong>
                  </Typography>
                  <Avatar
                    sx={{ cursor: 'pointer', backgroundColor: '#5B8B1D', width: 48, height: 48 }}
                    onClick={(e) => setMenuAnchorEl(e.currentTarget)}
                  >
                    {user ? (
                      <>
                        {user.firstName?.[0]}
                        {user.lastName?.[0]}
                      </>
                    ) : (
                      ''
                    )}
                  </Avatar>
                
                  <Menu
                    sx={{ marginTop: 1, marginLeft: -3 }}
                    open={Boolean(menuAnchorEl)}
                    anchorEl={menuAnchorEl}
                    onClose={() => setMenuAnchorEl(null)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                 
                  >
                    <MenuItem onClick={() => {navigate('/minhas-reservas'); location.reload()}}>
                      Minhas Reservas
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/favoritos')}>
                      Favoritos
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/reviews')}>
                      Reviews
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        logout();
                        addGlobalMessage('Sessão finalizada', 'success')
                        navigate('/');
                      }}
                    >
                      Sair
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  {!isRegisterPage && (
                    <Button
                      component={Link}
                      to="/register"
                      variant="text"
                      color="secondary"
                      sx={{ color: '#ffffff' }}
                    >
                      Criar conta
                    </Button>
                  )}
                  {!isLoginPage && (
                    <Button
                      component={Link}
                      to="/login"
                      variant="text"
                      color="secondary"
                      sx={{ color: '#ffffff' }}
                    >
                      Iniciar sessão
                    </Button>
                  )}
                </>
              )}
            </UserBlock>
          )}
        </Toolbar>
      </Wrapper>
      <MobileDrawer
        open={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
      />
    </>
  );
}
