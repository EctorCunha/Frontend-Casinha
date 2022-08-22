import { Box, Card, styled } from "@mui/material";

export const Wrapper = styled(Box)({
  h2: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 8,
    color: '#2D4C2A',
  },
  '& .swiper': {
    paddingBottom: 24,
    zIndex: 0,
  },
  '.swiper-button-prev, .swiper-button-next': {
    color: '#B5AEA8',
  },
});

export const CategoryCard = styled(Card)({
  backgroundColor: '#FFFFFF',
  borderRadius: 4,
  filter: 'grayscale(100%)',
  transition: '0.3s ease-in-out',
  '&:hover': {
    filter: 'grayscale(0%)',
  },
  a: {
    textDecoration: 'none',
  },
  '& .MuiCardMedia-root': {
    display: 'block',
    width: '100%',
    height: 180,
    objectFit: 'cover',
  },
  h3: {
    fontSize: 25,
    fontWeight: 700,
    color: '#FFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '5px 15px',
    backgroundColor: '#00000050',
    width: '100%',
  },
});
