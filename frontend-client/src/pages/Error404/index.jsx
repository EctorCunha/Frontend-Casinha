import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import frameDoor from '@/assets/images/frame_door404.avif';
import { Page } from '@/components/Page';
import {
  ContainerError404,
  BackDoor,
  Door,
  DoorOpen,
  FrontDoor,
  Info,
} from './styles';

export function Error404() {
  return (
    <Page title="Página Não Encontrada">
      <ContainerError404
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Door>
          <img src={frameDoor} />
          <DoorOpen>
            <BackDoor>
              <FrontDoor />
            </BackDoor>
          </DoorOpen>
        </Door>
        <Info>
          <Typography variant="h3">Ops! Page not found</Typography>
          <Button
            component={Link}
            to={`/`}
            variant="contained"
            color="secondary"
          >
            Voltar
          </Button>
        </Info>
      </ContainerError404>
    </Page>
  );
}
