import { Box, styled } from "@mui/material";
import silhueta from '@/assets/images/silhueta.avif';
import desert02 from '@/assets/images/desert-02.avif';
import { keyframes } from '@mui/styled-engine';

const titleMove = keyframes`
  from {
    transform: translateX(0) scale(0.5);
  }

  to {
    transform: translateX(calc(100vw - 850px)) scale(1);
  }
`;

const titleMoveMD = keyframes`
  from {
    transform: translateX(0) scale(0.5);
  }

  to {
    transform: translateX(calc(100vw - 330px)) scale(1);
  }
`;

const desertMove = keyframes`
  from {
    transform: translateX(-100px) scale(0.5) rotate(0);
  }

  to {
    transform: translateX(500px) scale(1) rotate(1800deg);
  }
`;


export const Header = styled(Box)(({ theme }) => ({
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'url(https://images.unsplash.com/photo-1604182331352-61916d0aef1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1184&q=70)',
  backgroundSize: 'cover',
  backgroundPosition: '0 43%',
  height: '25vh',
  width: '100%',

  a: {
    width: 48,
    height: 48,
    color: '#ffffff',
  },

  h2: {
    fontSize: 100,
    fontWeight: 800,
    position: 'absolute',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
    animation: `${titleMove} 3s ease-in-out 1 forwards`,
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
      animation: `${titleMoveMD} 3s ease-in-out 1 forwards`,
    },
  },
}));

export const Image = styled(Box)({
  zIndex: 1,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${silhueta})`,
  backgroundSize: '50vh',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'bottom',
});

export const NoReservations = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  margin: 50,
  textAlign: 'center',
  p: {
    fontSize: 25,
    marginBottom: 16,
  },
});

export const Desert = styled(Box)({
  width: '80vw',
  maxWidth: 350,
  minHeight: '25vh',
  backgroundImage: `url(${desert02})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  overflow: 'hidden',
  borderRadius: 10,
  marginBottom: 15,
  display: 'flex',
  alignItems: 'end',
  filter: 'grayscale(100%)',
  img: {
    width: 50,
    animation: `${desertMove} 10s ease-in-out infinite`,
  }

});

