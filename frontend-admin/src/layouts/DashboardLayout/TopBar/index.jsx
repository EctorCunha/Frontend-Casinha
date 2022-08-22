import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  SvgIcon,
  styled,
} from '@mui/material';
import { Menu as MenuIcon } from 'react-feather';
import { Logo } from '../../../components/Logo';
import { Account } from './Account';

const Wrapper = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 100,
  boxShadow: 'none',
  backgroundColor: 'theme.palette.primary.main',
  '.toolbar': {
    minHeight: 64,
  },
  '.title': {
    flexGrow: 1,
  },
  '.marginRight': {
    marginRight: theme.spacing(2),
  },
  '.logo': {
    width: 150
  }
}));

export function TopBar({ className, onMobileNavOpen, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Toolbar className="toolbar">
        <Hidden lgUp>
          <IconButton
            className="menuButton"
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/" className="marginRight">
            <Logo className="logo" />
          </RouterLink>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </Wrapper>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};
