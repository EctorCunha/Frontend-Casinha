import { styled, Card, Dialog } from '@mui/material';

export const Wrapper = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 4,
  img: {
    display: 'block',
    width: 120,
    height: 120,
    objectFit: 'cover',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 16
  }
});

export const Details = styled(Card)({
  padding: 16,
  h3: {
    fontWeight: 700,
    fontSize: 18,
  },
  p: {
    fontSize: 14,
    color: '#777'
  },
  span: {
    color: '#5B8B1D',
  }
});

export const ReviewDialog = styled(Dialog)({
  img: {
    display: 'block',
    width: 120,
    height: 120,
    objectFit: 'cover',
  },
  h3: {
    fontWeight: 700,
    fontSize: 18,
  },
});

export const DetailsDialog = styled(Dialog)({
  h2: {
    fontWeight: 700,
    fontSize: 18,
    color: '#2D4C2A',
    marginBottom: 16
  },
  span: {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  p: {
    marginBottom: 8
  }
});
