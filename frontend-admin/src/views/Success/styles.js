import { Box, styled } from "@mui/material";

export const ContainerSuccessCreation = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vh - 132px)',
    background:
      'url(https://d2v9ipibika81v.cloudfront.net/uploads/sites/248/travel-mascot-1140x684-1-1140x684.jpg)',
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
  