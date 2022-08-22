import { keyframes } from '@mui/styled-engine';
import bgForm from '@/assets/images/bg_form.avif';
import { Box, styled } from '@mui/material';

const moveBackground = keyframes`
  from{
    -webkit-transform: translate3d(0px, 0px, 0px);
  }

  to{
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
`;

export const ContainerLogin = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 132px)',
});

export const ContainerBackground = styled(Box)({
  height: 'calc(100vh - 132px)',
  width: '100%',
  position: 'fixed',

  '.imagebg': {
    position: 'absolute',
    minWidth: '100%',
    zIndex: 3,
    bottom: 0,
  },

  '.imagemoon': {
    position: 'absolute',
    width: 150,
    zIndex: 2,
    top: '5%',
    right: '5%',
  },
});

export const Star = styled(Box)({
  background:
    'black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 0,
});

export const Twinkling = styled(Box)({
  width: '10000px',
  height: '100%',
  background:
    'transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat',
  backgroundSize: '1000px 1000px',
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 1,
  animation: `${moveBackground} 30s linear infinite`,
});

export const Clouds = styled(Box)({
  width: '10000px',
  height: '100%',
  opacity: '0.3',
  background: 'transparent url("https://s.cdpn.io/15514/clouds_2.png") repeat',
  backgroundSize: '2000px 800px',
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 2,
  animation: `${moveBackground} 100s linear infinite`,
});

export const LoginForm = styled(Box)({
  display: 'flex',
  textAlign: 'center',
  zIndex: 5,

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
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  margin: 12,
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

export const ContainerForm = styled('form')({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  padding: '0 32px 24px',
  borderRadius: '0 0 4px 4px',
  width: '100%',
  maxWidth: 400,
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
});

export const Input = styled(Box)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  textAlign: 'left',
  margin: '10px',
  span: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  '& .MuiTextField-root': {
    width: '100%',
  },
}));
