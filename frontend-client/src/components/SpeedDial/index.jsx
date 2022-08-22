import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled, Box } from '@mui/material';

const actions = [
  { icon: <LiveHelpIcon />, name: 'FAQs', link: '/faqs' },
  { icon: <WhatsAppIcon />, name: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=+5581998613646&text=Oi! Estamos à sua disposição.' },
  { icon: <YouTubeIcon />, name: 'YouTube', link: 'https://www.youtube.com' },
  { icon: <InstagramIcon />, name: 'Instagram', link: 'https://www.instagram.com' },

];

const Wrapper = styled(Box)({
  display: 'flex',
  left: 20,
  position: 'fixed',
  bottom: '45px',
  zIndex: 2000,

  '.MuiFab-primary':{
    background:'#5B8B1D',
    // width: 40,
    // height: 40,
  }
});



export function SpeedDialHome() {
  return (
    <Wrapper>
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon/>}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.link} 
            target='_blank'
          />
        ))}
      </SpeedDial>
    </Box>
    </Wrapper>
  );
}