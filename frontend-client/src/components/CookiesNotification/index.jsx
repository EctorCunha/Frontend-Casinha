import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Link, Typography, Portal } from '@mui/material';
import { Cookie as CookieIcon } from '@mui/icons-material';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import { Wrapper } from './styles';

export function CookiesNotification() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    Cookies.set('cookiesConsent', 'true');
    setOpen(false);
  }

  useEffect(() => {
    const consent = Cookies.get('cookiesConsent');
    if (!consent) {
      setOpen(true);
    }
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Portal container={document.querySelector('body')}>
      <Wrapper
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <Typography mb={1} sx={{ display: 'flex', gap: 1 }}>
          <CookieIcon />
          Esse site usa cookies
        </Typography>
        <Typography variant="body1" color="inherit">
          Nós armazenamos dados temporariamente para melhorar a sua experiência
          de navegação e recomendar conteúdo do seu interesse.
          <Link
            component={RouterLink}
            to="/politica-de-privacidade"
            color="inherit"
            underline="always"
            target="_blank"
          ></Link>
        </Typography>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={handleClose} variant="contained" color="secondary">
            OK
          </Button>
        </Box>
      </Wrapper>
    </Portal>
  );
}
