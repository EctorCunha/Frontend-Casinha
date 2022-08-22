import { Routes } from '@/routes';
import { Providers } from '@/providers';
import { Auth } from '@/components/Auth';
import { GlobalLoading } from '@/components/GlobalLoading';
import { GlobalMessage } from '@/components/GlobalMessage';
import { CookiesNotification } from './components/CookiesNotification';
import { SpeedDialHome } from './components/SpeedDial';
import './styles/global.css';

function App() {
  return (
    <Providers>
      <Auth>
        <Routes />
        <GlobalLoading />
        <GlobalMessage />
        <CookiesNotification />
        <SpeedDialHome />
      </Auth>
    </Providers>
  );
}

export default App;
