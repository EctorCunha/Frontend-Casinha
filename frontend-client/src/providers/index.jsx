import ptBrLocale from 'date-fns/locale/pt-BR';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AuthProvider } from '@/context/AuthContext';
import { InterfaceProvider } from '@/context/InterfaceContext';
import { theme } from '@/theme';

export function Providers({ children }) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <InterfaceProvider>
          <ThemeProvider theme={theme}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ptBrLocale}
            >
              {children}
            </LocalizationProvider>
          </ThemeProvider>
          <CssBaseline />
        </InterfaceProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
