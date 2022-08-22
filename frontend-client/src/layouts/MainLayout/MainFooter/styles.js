import { Box, styled } from "@mui/material";
import houseUp from '@/assets/images/houseUp.avif';
import balloon from '@/assets/images/balloon.avif';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingBlock: 8,
  padding: '48px 50px',
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  h3: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 24,
  },
  a: {
    fontSize: 14,
    color: '#ffffff',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    marginBottom: 8,
    textDecoration: 'none',
  },
  img: {
    width: '150px',
  },

}));

export const SocialLinks = styled(Box)({
  display: 'flex',
  gap: 8,
  a: {
    width: 24,
    height: 24,
  },
  svg: {
    color: '#ffffff',
  },
});

export const ContainerHouse = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: "100%",
  height: "100%",
  '&:hover .house ': {
    transform: 'translateY(-200%) rotate(15deg)',
  },

  '&:hover .ballon ': {
    opacity: 1,
    transform: 'scale(1.2) translateY(-135%) translateX(-5%) ',
  },

});

export const Circle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 100,
  height: 100,
  borderRadius: "100%",
  border: 'solid 5px #5C8C30',
});

export const HouseUp = styled(Box)({
  width: 70,
  height: 70,
  backgroundImage: `url(${houseUp})`,
  backgroundSize: 'cover',
  zIndex: 2,
  pointerEvents: 'none',
  transition: '.6s all ease-in-out',
});

export const Balloon = styled(Box)({
  width: 100,
  height: 150,
  backgroundImage: `url(${balloon})`,
  backgroundSize: 'cover',
  zIndex: 1,
  position: 'absolute',
  opacity: 0,
  transition: '0.6s all ease-in-out',
});


