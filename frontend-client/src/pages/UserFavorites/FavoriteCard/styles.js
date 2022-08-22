import { Card, styled } from "@mui/material";

export const Wrapper = styled(Card)({
  width: '100%',
  borderRadius: 4,
  '.MuiCardContent-root': {
    height: '100%',
    padding: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '&:last-child': {
      paddingBottom: 12,
    },
  },
  '.category': {
    display: 'inline-block',
    fontSize: 14,
    color: '#D89C98',
  },
  '.rating': {
    color: '#FFDC82',
    marginBottom: 10,
  },
  '.title': {
    fontSize: 24,
    color: '#102542',
    fontWeight: 700,
    marginBottom: 5,
  },
  '.location': {
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    svg: {
      color: '#B5AEA8',
      fontSize: 18,
    },
    a: {
      color: '#5B8B1D',
      textDecoration: 'none',
      textTransform: 'uppercase',
      marginTop: 3,
      '&:hover': {
        textDecoration: 'undernline',
      },
    },
  },
  '.description': {
    fontWeight: 500,
    fontSize: 14,
    marginTop: 'auto',
    marginBottom: '8px',
    a: {
      color: '#5B8B1D',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'undernline',
      },
    },
  },

  '.heart': {
    position: 'relative',
    top: '-100%',
  },
});
