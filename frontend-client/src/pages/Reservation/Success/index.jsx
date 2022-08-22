import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { CheckCircleOutline as CheckIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Page } from '@/components/Page';
import { Wrapper, Message, ContainerSuccessReservation } from './styles';
import icon from '@/assets/images/car.avif';
import visas from '@/assets/images/visas.avif';

export function SuccessReservation() {
  return (
    <Page title="Reserva Finalizada">
      <ContainerSuccessReservation
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Message
          component={motion.div}
          animate={{ opacity: 1, y: 50 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          <Wrapper>
            <img className="icon" src={icon} />
            <Typography variant="h4">Prepare a mala!</Typography>
            <Typography variant="h6">
              Sua casinha foi reservada com sucesso.
            </Typography>
            <CheckIcon />
          </Wrapper>
          <Link to="/">
            <Button fullWidth variant="outlined">
              Voltar para Home
            </Button>
          </Link>
          <Link to="/minhas-reservas">
            <Button fullWidth variant="outlined">
              Ver minhas reservas
            </Button>
          </Link>
          <img className="visas" src={visas} />
        </Message>
      </ContainerSuccessReservation>
    </Page>
  );
}
