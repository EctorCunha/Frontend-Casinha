import { Box, styled } from "@mui/material";
import { keyframes } from '@mui/styled-engine';
import bgForm from '@/assets/images/bg_form.avif';

const airBalloonMove = keyframes`
  from {
    transform: translateX(0) scale(0.5);
  }

  to {
    transform: translateX(calc(100vw - 200px)) scale(1.5);
  }
`;

const airBalloonMoveMobile = keyframes`
  from {
    transform: translateX(0) scale(0.5);
  }

  to {
    transform: translateX(calc(100vw - 105px)) scale(1);
  }
`;

export const ContainerRegister = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'max-content',
  minHeight: 'calc(100vh - 132px)',
  backgroundImage: `url(https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80)`,
  backgroundSize: 'cover',
  '& ::-webkit-scrollbar': {
    width: '0px',
  },
  '.imageBalloon': {
    width: '100px',
    position: 'absolute',
    zIndex: 1,
    top: '25%',
    left: 0,
    animation: `${airBalloonMove} 30s ease-in-out 1 forwards`,

    [theme.breakpoints.down('md')]: {
      top: '30%',
      animation: `${airBalloonMoveMobile} 10s ease-in-out 1 forwards`,
    },

    [theme.breakpoints.down('sm')]: {
      top: '20%',

    },
  },
}));

export const RegisterForm = styled(Box)({
  display: 'flex',
  textAlign: 'center',
  borderRadius: 10,
  zIndex: 1,
  margin: 12,
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  h1: {
    fontSize: 50,
    marginBottom: 10,
  },
});

export const Container = styled(Box)({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

export const ContainerImage = styled(Box)({
  height: '20vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${bgForm})`,
  backgroundPosition: 'center',
  borderRadius: '4px 4px 0 0',
  transform: 'translateY(1%)',
});

export const ContainerForm = styled(Box)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: '#fff',
  padding: '0 32px 24px',
  borderRadius: '0 0 4px 4px',
  maxWidth: 800,
  h2: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 500
  },
  '> p': {
    marginTop: 16,
    a: {
      textDecoration: 'none',
      color: 'inherit',
      transition: 'all .3s',
      '&:hover': {
        textDecoration: 'underline',
        color: '#2D4C2A',
      }
    }
  }
}));

export const ContainerLogin = styled(Box)({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginBottom: 10,
  a: {
    textDecoration: 'none',
    color: '#2D4C2A',
  },
  '& .MuiButton-root': {
    margin: '20px 0 15px 0',
  },
});
