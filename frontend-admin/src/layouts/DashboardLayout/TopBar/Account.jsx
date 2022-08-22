import React, { useRef, useState } from 'react';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function Account() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      logout();
      navigate('/');
    } catch (error) {}
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Hidden smDown>
          <Typography
            color="inherit"
            className="print-avatar-block"
          >
            {user.firstName} {user.lastName}
          </Typography>
        </Hidden>
        <Avatar alt="Usuário" sx={{ height: 40, width: 40, marginLeft: 1, backgroundColor: '#5B8B1D' }}>
          {user.firstName[0]}{user.lastName[0]}
        </Avatar>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        PaperProps={{ sx: { width: 200 } }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </>
  );
}
