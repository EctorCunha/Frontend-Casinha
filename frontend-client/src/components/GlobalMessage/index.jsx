import { Alert, Snackbar } from '@mui/material';
import { useInterface } from '@/hooks/useInterface';
import {useState} from 'react';

export function GlobalMessage() {
  const { globalMessage, removeGlobalMessage } = useInterface();
  const { message, type } = globalMessage;
  const [state, setState] = useState({
    vertical: 'bottom',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;

  return (
    <Snackbar
      open={Boolean(globalMessage.message)}
      autoHideDuration={4000}
      onClose={removeGlobalMessage}
      anchorOrigin={{ vertical, horizontal }}
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
