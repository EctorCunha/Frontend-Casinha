import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { theme } from './theme';
import { Auth } from './components/Auth';
import { AuthProvider } from './context/AuthContext';
import { InterfaceProvider } from './context/InterfaceContext';
import { GlobalLoading } from './components/GlobalLoading';
import { GlobalMessage } from './components/GlobalMessage';

function App() {
  return (
    <BrowserRouter>
      <InterfaceProvider>
        <AuthProvider>
          <Auth>
            <ThemeProvider theme={theme}>
              <AppRoutes />
              <GlobalLoading />
              <GlobalMessage />
              <CssBaseline />
            </ThemeProvider>
          </Auth>
        </AuthProvider>
      </InterfaceProvider>
    </BrowserRouter>
  );
}

export default App;
