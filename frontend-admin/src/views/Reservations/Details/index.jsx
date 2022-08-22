import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import { Page } from '@/components/Page';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Header } from '@/components/Header';
import { useInterface } from '@/hooks/useInterface';
import { ReservationInfo } from './ReservationInfo';

export default function ReservationDetails() {
  const [reservation, setReservation] = useState(null);
  const { entityId } = useParams();
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const reservationsApi = new CasinhaApi('/reservations');

  async function fetchReservation() {
    try {
      addGlobalLoading();
      const response = await reservationsApi.get(entityId);
      setReservation(response.data);
    } catch {}
    finally {
      removeGlobalLoading();
    }
  }

  function handleCancelReservation() {
    alert('TODO');
  }

  useEffect(() => {
    fetchReservation();
  }, []);

  return (
    <Page title="Reserva">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Reservas"
          textTypography="Reserva"
          textLink="Painel de Controle"
          linkToBreadcrumb="/reservas"
        />
        {reservation && (
          <Box mb={2} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancelReservation}
            >
              Cancelar Reserva
            </Button>
          </Box>
        )}
        {reservation && <ReservationInfo reservation={reservation} />}
      </Container>
    </Page>
  );
}
