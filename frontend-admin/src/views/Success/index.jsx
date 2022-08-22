import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { CheckCircleOutline as CheckIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Page } from '@/components/Page';
import { Wrapper, Message, ContainerSuccessCreation} from './styles';
import icon from '@/assets/images/casa.png';


export default function  SuccessCreation() {
  return (
    <Page title="Casinha criada com sucesso">
      <ContainerSuccessCreation
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
            <Typography variant="h4">Prepare a casa!</Typography>
            <Typography variant="h6">
              Sua casinha foi criada com sucesso.
            </Typography>
            <CheckIcon />
          </Wrapper>
          <Link to="/">
            <Button fullWidth variant="outlined">
              Voltar para Home
            </Button>
          </Link>
         
        </Message>
      </ContainerSuccessCreation>
    </Page>
  );
}
