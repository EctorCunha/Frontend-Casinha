import { Backdrop, CircularProgress } from '@mui/material';
import { useInterface } from '@/hooks/useInterface';

export function GlobalLoading() {
  const { globalLoading } = useInterface();

  return (
    <Backdrop sx={{ zIndex: 9999, color: '#fff' }} open={globalLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
