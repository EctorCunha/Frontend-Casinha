import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, matchPath } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
} from '@mui/material';
import { GroupOutlined, AdminPanelSettingsOutlined, ShoppingBagOutlined, EditAttributesOutlined, CategoryOutlined, BungalowOutlined, DashboardOutlined, LocationOnOutlined, WebOutlined } from '@mui/icons-material';
import {
  Home as HomeIcon,
  Briefcase as BriefcaseIcon,
  ShoppingBag as ShoppingBagIcon,
  ShoppingCart as ShoppingCartIcon,
  User as UserIcon,
  Users as UsersIcon,
} from 'react-feather';
import { Logo } from '../../../components/Logo';
import { NavItem } from './NavItem';
import { styled } from '@mui/material';

const navConfig = [
  {
    subheader: 'Painel',
    items: [
      {
        title: 'Início',
        icon: DashboardOutlined,
        href: '/',
      },
      {
        title: 'Casinhas',
        icon: BungalowOutlined,
        href: '/casinhas',
      },
      {
        title: 'Categorias',
        icon: CategoryOutlined,
        href: '/categorias'
      },
      {
        title: 'Cidades',
        icon: LocationOnOutlined,
        href: '/cidades'
      },
      {
        title: 'Usuários',
        icon: GroupOutlined,
        href: '/usuarios',
       
      },
      {
        title: 'Reservas',
        icon: ShoppingBagOutlined,
        href: '/reservas',
      },
    ],
  },
  {
    subheader: 'Gestão',
    items: [
      {
        title: 'Ver site',
        icon: WebOutlined,
        href: '//www.ctdcasinha.com',
        openInNewTab: true
      }
    ],
  }
];

const Wrapper = styled(Box)({
  '.mobileDrawer': {
    width: 256,
  },
  '.desktopDrawer': {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  '.avatar': {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
  '.logo': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});

export function NavBar({ openMobile, onMobileClose }) {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">
              <Logo className="logo" />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          {navConfig.map(config => {
            const content = renderNavItems({
              items: config.items,
              pathname: location.pathname,
            });

            return content ? (
              <List
                key={config.subheader}
                subheader={
                  <ListSubheader disableGutters disableSticky>
                    {' '}
                    {config.subheader}{' '}
                  </ListSubheader>
                }
              >
                {content}{' '}
              </List>
            ) : (
              <></>
            );
          })}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  function renderNavItems({ items, ...rest }) {
    const child = items.reduce(
      (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
      []
    );

    if (!child?.length) {
      return null;
    }

    return <List disablePadding>{child}</List>;
  }

  function reduceChildRoutes(args) {
    const { acc, pathname, item, depth = 0 } = args;
    const key = item.title + depth;

    if (item.items) {
      const open = matchPath(pathname, item.href);

      const children = renderNavItems({
        depth: depth + 1,
        pathname,
        items: item.items,
      });

      if (children) {
        acc.push(
          <NavItem
            depth={depth}
            icon={item.icon}
            key={key}
            info={item.info}
            open={Boolean(open)}
            title={item.title}
          >
            {children}
          </NavItem>
        );
      }
      return acc;
    }

    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
        openInNewTab={item.openInNewTab}
      />
    );

    return acc;
  }

  return (
    <Wrapper>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: 'mobileDrawer' }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: 'desktopDrawer' }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </Wrapper>
  );
}
