import { Box, styled } from '@mui/material';

export const ContainerCategory = styled(Box)(({ theme }) => ({
  display: 'flex',

  '& ::-webkit-scrollbar': {
    width: '0px',
  },

  [theme.breakpoints.down('md')]: {
    display: 'grid',
  },
}));

export const CategoryImage = styled(Box)(({ theme }) => ({
  width: '15vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& .img_category': {
    width: '15vw',
    height: 'calc(100vh - 132px)',
    objectFit: 'cover',
    filter: 'grayscale(100%)',
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '25vh',
    },
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '25vh',
    marginBottom: 20,
  },
}));

export const Title = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundColor: '#0000006f',
  padding: 10,
  zIndex: 1,
  width: '100%',

  h1: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  h2: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
  },

  [theme.breakpoints.down('md')]: {
    height: '15vh',
    width: '100%',
    padding: '10px 20px',
  },
}));

export const Product = styled(Box)(({ theme }) => ({
  width: '85vw',
  height: 'calc(100vh - 132px)',
  padding: 15,
  overflowY: 'scroll',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
