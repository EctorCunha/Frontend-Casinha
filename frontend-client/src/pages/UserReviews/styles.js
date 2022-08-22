import { Box, styled, Typography } from '@mui/material';
import airplane from '@/assets/images/airplane.avif';
import { keyframes } from '@mui/styled-engine';
import park01 from '@/assets/images/park-01.avif';

const titleMove = keyframes`
  from {
    transform: translateX(1500px) scale(0.5);
  }

  to {
    transform: translateX(20px) scale(1);
  }
`;

const titleMoveMD = keyframes`
  from {
    transform: translateX(800px) scale(0.5);
  }

  to {
    transform: translateX(10px) scale(1);
  }
`;

const airplaneMove = keyframes`
  from {
    transform: translateX(-500);
  }

  to {
    transform: translateX(calc(100vw - 600px));
  }
`;

const airplaneMoveMD = keyframes`
  from {
    transform: translateX(-100);
  }

  to {
    transform: translateX(calc(100vw - 300px));
  }
`;

export const Header = styled(Box)(({ theme }) => ({
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  backgroundImage:
    'url(https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: '0 68%',
  height: '25vh',
  width: '100%',
  overflow: 'hidden',

  a: {
    width: 48,
    height: 48,
    color: '#ffffff',
  },

  h2: {
    fontSize: 64,
    fontWeight: 800,
    position: 'absolute',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
    animation: `${titleMove} 3s ease-in-out 1 forwards`,
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
      fontWeight: 800,
      animation: `${titleMoveMD} 3s ease-in-out 1 forwards`,
    },
  },
}));

export const Image = styled(Box)(({ theme }) => ({
  zIndex: 1,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${airplane})`,
  backgroundSize: 'auto 450px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  animation: `${airplaneMove} 5s ease-in-out 1 forwards`,

  [theme.breakpoints.down('md')]: {
    animation: `${airplaneMoveMD} 3s ease-in-out 1 forwards`,
  },
}));

export const NoReviews = styled(Box)({
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

export const SectionHeading = styled(Typography)({
  fontSize: 16,
  fontWeight: 700,
  textTransform: 'uppercase',
  color: '#2D4C2A',
  marginBottom: 8
});
