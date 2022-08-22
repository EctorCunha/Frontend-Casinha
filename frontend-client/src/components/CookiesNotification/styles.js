import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)({
  backgroundColor: '#111111',
  color: '#ffffff',
  maxWidth: 600,
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  margin: 16,
  padding: 16,
  outline: 'none',
  zIndex: 2000,
  borderRadius: 4,
  svg: {
    color: '#5B8B1D',
  },
});
