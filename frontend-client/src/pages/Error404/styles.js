import { Box, styled } from "@mui/material";
import door from '@/assets/images/door404.avif';
import space from '@/assets/images/space.avif';

export const ContainerError404 = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(100vh - 132px)',

  h3: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 30,
  },

  img: {
    position: 'fixed',
    width: '30vw',
    [theme.breakpoints.down('md')]: {
      width: '50vw',
    },
  },

  '.MuiButton-root': {
    width: 150,
  },
}));

export const Door = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50%',
});

export const DoorOpen = styled(Box)(({ theme }) => ({
  position: 'fixed',
  width: 70,
  height: 260,
  [theme.breakpoints.down('md')]: {
    width: 46,
    height: 174,
  },
  [theme.breakpoints.down('sm')]: {
    width: 24,
    height: 80,
  },

}));

export const BackDoor = styled(Box)({
  backgroundImage: `url(${space})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin: '0 auto',
  width: '100%',
  height: '100%',
});

export const FrontDoor = styled(Box)({
  backgroundImage: `url(${door})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  transformOrigin: 'right',
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    transform:
      'perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(105deg)',
  },
});

export const Info = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
