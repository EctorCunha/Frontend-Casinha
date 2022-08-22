import { Alert, Snackbar } from '@mui/material';
import { useInterface } from '@/hooks/useInterface';

export function GlobalMessage() {
  const { globalMessage, removeGlobalMessage } = useInterface();
  const { message, type } = globalMessage;

  return (
    <Snackbar
      open={Boolean(globalMessage.message)}
      autoHideDuration={4000}
      onClose={removeGlobalMessage}
    >
      <Alert
        variant="filled"
        severity={type ? type : 'success'}
        onClose={removeGlobalMessage}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
