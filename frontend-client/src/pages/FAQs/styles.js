import { styled, Box } from '@mui/material';
import bgForm from '@/assets/images/bg_form.avif';
import { keyframes } from '@mui/styled-engine';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 132px)',
  backgroundImage: 'url(https://images.unsplash.com/photo-1543996991-8e851c2dc841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1171&q=70)',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  overflow: 'hidden',

  img: {
    position: 'absolute',
    transform: 'translateX(35%)',
  },

  '.compass01': {
    maxWidth: '25vw',
    zIndex: 1,
    left: "50.1%",
    animation: `${rotation} 40s infinite linear`,
  },

  '.compass': {
    maxWidth: '35vw',
    zIndex: 0,
  },
});

export const AccordionContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  '.question': {
    fontWeight: 700,
  }
});

export const AccordionItem = styled(Box)({
  width: '100%',
});

export const ContainerCompass = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

});

export const ContainerImage = styled(Box)({
  height: '25vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${bgForm})`,
  backgroundPosition: 'center',
  borderRadius: '10px 10px 0 0',
  transform: 'translateY(1%)',
});

export const ContainerInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  width: '100%',
  borderRadius: '0 0 10px 10px',

  h2: {
    color: '#000',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 700,
  },
});