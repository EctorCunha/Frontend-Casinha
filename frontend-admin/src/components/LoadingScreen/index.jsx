import { Box, LinearProgress } from '@mui/material';
import { Wrapper } from './styles';

export function LoadingScreen() {
  return (
    <Wrapper>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </Wrapper>
  );
}
