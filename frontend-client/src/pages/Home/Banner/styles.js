import { Box, styled } from '@mui/material';
import { keyframes } from "@mui/styled-engine";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '45vh',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'start',
    height: '40vh',
  },
}));

const birdMove = keyframes`
  from {
    transform: translateX(-50px) scale(0.5);
  }

  to {
    transform: translateX(2000px) scale(1);
  }
`;

const birdMoveMD = keyframes`
  from {
    transform: translateX(-50px) scale(0.5);
  }

  to {
    transform: translateX(1000px) scale(1);
  }
`;

export const Bird = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  top: '25%',
  left: 0,
  zIndex: 1,
  overflow: 'hidden',
  img: {
    width: '5%',
    animation: `${birdMove} 30s ease-out infinite`,
    [theme.breakpoints.down('md')]: {
      width: '10%',
      animation: `${birdMoveMD} 30s ease-out infinite`,
    },
  }
  
}));

export const ContainerBanner = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: 30,
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    marginTop: '8%',
    width: '90%',
  },

  '& .frame': {
    width: 300,
    filter: 'saturate(150%)',
    [theme.breakpoints.down('md')]: {
      width: 180,
    },
    [theme.breakpoints.down('sm')]: {
      width: 140,
    },
  },

  h1: {
    color: '#fff',
    fontSize: 60,
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
    },
  },
}));

const fadeInOut = keyframes`
0% {
  opacity: 1;
}
17% {
  opacity: 1;
}
25% {
  opacity: 0;
}
92% {
  opacity: 0;
}
100% {
  opacity: 1;
}`;

export const BannerImages = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'relative',
    inset: 0,
    backgroundImage: 'linear-gradient(red, blue)',
  },
  '.image': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    left: 0,
    webkitTransition: 'opacity 1s ease-in-out',
    mozTransition: 'opacity 1s ease-in-out',
    oTransition: 'opacity 1s ease-in-out',
    transition: 'opacity 1s ease-in-out',
    animation: `${fadeInOut} 25s ease-in-out infinite`,
  },
  img: {
    '&:nth-of-type(1)': {
      animationDelay: '20s',
    },
    '&:nth-of-type(2)': {
      animationDelay: '15s',
    },
    '&:nth-of-type(3)': {
      animationDelay: '10s',
    },
    '&:nth-of-type(4)': {
      animationDelay: '5s',
    },
    '&:nth-of-type(5)': {
      animationDelay: '0s',
    },
  },
}));
