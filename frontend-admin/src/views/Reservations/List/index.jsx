import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Page } from '@/components/Page';
import { Header } from '@/components/Header';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import { ReservationsTable } from './Table';

export default function ReservationList() {
  const [reservations, setReservations] = useState([]);
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const reservationsApi = new CasinhaApi('/reservations');

  async function fetchReservations() {
    try {
      addGlobalLoading();
      const response = await reservationsApi.getList();
      setReservations(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <Page title="Reservas">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Reservas"
          textTypography="Reservas"
          textLink="Painel de Controle"
        />
        {reservations && <ReservationsTable reservations={reservations} />}
      </Container>
    </Page>
  );
}
