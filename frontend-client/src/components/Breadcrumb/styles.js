import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)({
  color: '#2D4C2A',
  backgroundColor: '#f9f9f9',
  padding: '10px 0',
  a: {
    fontSize: 11,
    fontWeight: 700,
    color: 'inherit',
    textDecoration: 'none',
    display: 'block',
    paddinTop: 8,
    paddinBottom: 8,
    '&.last-item': {
      color: '#5B8B1D',
    }
  },
  svg: {
    fontSize: 16,
  },
});
