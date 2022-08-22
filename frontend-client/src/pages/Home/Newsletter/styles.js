import { Box, styled } from '@mui/material';
import stamp from '@/assets/images/stamp.avif';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  minHeight: '20vh',
  width: '100%',
  overflow: 'hidden',
  padding: 48,

  backgroundImage: `url(${stamp})`,
  backgroundSize: 'auto 250px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '75%',

  [theme.breakpoints.down('md')]: {
    backgroundSize: 'auto 150px',
  },

}));

export const ContainerNewsletter = styled(Box)({

  h4: {
    fontWeight: 700,
    color: '#2D4C2A',
    fontSize: 32,
    marginBottom: 24,
  },

  input: {
    height: 48,
    width: '50vw',
    maxWidth: 400,
    borderRadius: 4,
    borderColor: 'transparent',
    backgroundColor: '#cececd',
    marginRight: 8,
    paddingInline: 15,
    outlineColor: '#5B8B1D',
  },

  button: {
    paddingInline: 32,
    height: 48,
    borderRadius: 4,
    borderColor: 'transparent',
    backgroundColor: '#5B8B1D',
    color: '#fff',
    cursor: 'pointer',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#2D4C2A',
    }
  },

});

