import { Box, styled } from "@mui/material";
import { keyframes } from '@mui/styled-engine';
import park01 from '@/assets/images/park-01.avif';

const parkMove = keyframes`
  from {
    transform: translateX(350px) ;
  }

  to {
    transform: translateX(-50px);
  }
`;

const flip = keyframes`
  0%, 80% {
    transform: rotateY(360deg); 
  }
`;

export const Header = styled(Box)(({ theme }) => ({
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url(https://images.unsplash.com/photo-1573585769546-22658713e101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG92ZSUyMGxvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=1500&q=60)',
  backgroundSize: 'cover',
  backgroundPosition: '0 50%',
  height: '25vh',
  width: '100%',
  overflow: 'hidden',

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
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
      fontWeight: 800,
    },
  },
}));

export const Title = styled(Box)({
  position: 'relative',

});

export const Letter = styled(Box)(({ theme }) => ({
  color: '#ffffff',
  position: 'relative',
  display: 'inline-block',
  fontSize: 100,
  fontWeight: 800,
  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
  color: '#fff',
  animation: `${flip} 2s 2`,

  [theme.breakpoints.down('md')]: {
    fontSize: 60,
  },

  '&:nth-child(1)': {
    animationDelay: '0.2s',
  },

  '&:nth-child(2)': {
    animationDelay: '0.4s',
  },

  '&:nth-child(3)': {
    animationDelay: '0.6s',
  },

  '&:nth-child(4)': {
    animationDelay: '0.8s',
  },

  '&:nth-child(5)': {
    animationDelay: '1s',
  },

  '&:nth-child(6)': {
    animationDelay: '1.2s',
  },

  '&:nth-child(7)': {
    animationDelay: '1.4s',
  },

  '&:nth-child(8)': {
    animationDelay: '1.6s',
  },

  '&:nth-child(9)': {
    animationDelay: '1.8s',
  }
}));

export const NoFavorite = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  margin: 50,

  p: {
    fontSize: 25,
    marginBottom: 16,
  },
});

export const Park = styled(Box)({
  width: '70vw',
  maxWidth: 350,
  minHeight: '25vh',
  backgroundImage: `url(${park01})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  overflow: 'hidden',
  borderRadius: 10,
  marginBottom: 15,
  display: 'flex',
  alignItems: 'end',
  filter: 'grayscale(100%)',
  img: {
    width: 25,
    animation: `${parkMove} 15s ease-in-out infinite`,
  }
});

