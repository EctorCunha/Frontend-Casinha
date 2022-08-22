import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { NavBar } from './NavBar';
import { TopBar } from './TopBar';
import { GlobalLoading } from '../../components/GlobalLoading';
import { GlobalMessage } from '../../components/GlobalMessage';

const Wrapper = styled(Box)(({theme}) => ({
  backgroundColor: '#f7f7f7',
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
  '.wrapper': {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  '.contentContainer': {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  '.content': {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    paddingTop: 24,
    paddingBottom: 24,
  },
}));

export function DashboardLayout({ children }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Wrapper className="print-root">
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className="wrapper print-wrapper">
        <div className="contentContainer print-container">
          <div className="content print-content">{children}</div>
        </div>
      </div>
      <GlobalLoading />
      <GlobalMessage />
    </Wrapper>
  );
}
