import { Box, CircularProgress } from '@mui/material';
import { Logo } from '../Logo';
import { Wrapper } from './styles';

export function SplashScreen() {
  return (
    <Wrapper>
      <Box mb={4}>
        <Logo />
      </Box>
      <CircularProgress color="inherit" />
    </Wrapper>
  );
}
