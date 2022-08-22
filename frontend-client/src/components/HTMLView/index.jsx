import parse from 'html-react-parser';
import { Box } from '@mui/material';

export function HTMLView({ html }) {
  return <Box>{parse(html)}</Box>;
}
