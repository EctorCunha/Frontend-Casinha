import { Box, styled } from "@mui/material";

export const DrawerHeader = styled(Box)({
  padding: 12,
  width: '100vw',
  height: '20vh',
  backgroundColor: '#2D4C2A',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  p: {
    alignSelf: 'flex-end',
    color: '#FFFFFF',
    fontSize: 24,
  },
  svg: {
    color: '#FFFFFF',
    fontSize: 32,
  },
});

export const DrawerContent = styled(Box)({
  width: '100vw',
  height: '70vh',
  padding: 16,
  a: {
    display: 'block',
    textDecoration: 'none',
    color: '#102542',
    fontWeight: 700,
    paddingBlock: 16,
    textAlign: 'right',
    '&:last-of-type': {
      borderTop: '2px solid #B5AEA8',
    },
  },
});

export const DrawerFooter = styled(Box)({
  padding: 8,
  width: '100vw',
  height: '10vh',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  a: {
    color: '#102542',
    marginLeft: 8,
  },
});
