import { Box, styled, Card } from "@mui/material";

export const Wrapper = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',

  img: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
    cursor: 'pointer'
  },

  h3: {
    fontSize: 24,
    fontWeight: 700,
    color: '#2D4C2A',
    marginBottom: 15,
  },

  [theme.breakpoints.down('md')]: {
    minHeight: 610,
  },

}));

export const Details = styled(Box)({
  gap: 15,
  strong: {
    display: 'block'
  },
  span: {
    display: 'block',
  }
});

export const DetailsItem = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '2fr 2fr',
  gap: 10,
  marginBottom: 10,
});

export const ContainerMenu = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'right',

  button: {
    cursor: 'pointer',
    backgroundColor: '#FFF',
    minWidth: 40,
    height: 40,
    position: 'absolute',
    borderRadius: 20,
    margin: 5,
    transition: '0.3s ease-in-out',

    '&:hover': {
      backgroundColor: '#2D4C2A',
      svg: { color: '#fff' }
    },
  },
});