import { Box, styled } from "@mui/material";

export const ContainerSuccessReservation = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'calc(100vh - 132px)',
  background:
    'url(https://images.unsplash.com/photo-1603623898182-2cd32c343d70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1170&q=70)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
});

export const Message = styled(Box)(({ theme }) => ({
  padding: 20,
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  flexDirection: 'column',
  borderRadius: 10,
  width: '90vw',
  maxWidth: 500,
  maxHeight: 400,
  height: '55vh',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  transform: 'translateY(20%)',
  [theme.breakpoints.down('md')]: {
    transform: 'translateY(10%)',
  },

  '.icon': {
    position: 'absolute',
    width: '50%',
    transform: 'translateY(-90%)',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
      transform: 'translateY(-130%)',
    },
  },

  '.visas': {
    position: 'absolute',
    width: '60%',
    transition: '.8s all ease-in-out',

    '&:hover': {
      transform: 'scale(2.3) translateY(-15%)',
    },

    [theme.breakpoints.down('md')]: {
      width: '75%',
      '&:hover': {
        transform: 'scale(1.8) translateY(-10%) translateX(-3%)',
      },
    },
  },

  a: {
    zIndex: 1,
    textDecoration: 'none',
    color: '#2D4C2A',
    marginTop: 16,
    display: 'block',
    width: '100%',
  },
}));

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  zIndex: 1,
  gap: 10,
  pointerEvents: 'none',

  svg: {
    zIndex: 1,
    width: 70,
    height: 70,
    color: '#2D4C2A',
  },
});
