import { Container, Grid } from '@mui/material';
import { Page } from '@/components/Page';
import { Header } from './Header';
import { LatestReservations } from './LatestReservations';
import { LatestCustomers } from './LatestCustomers';
// import { Stats } from './Stats';
import { useEffect, useState } from 'react';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';

export default function Dashboard() {
  const [reservations, setReservations] = useState([]);
  const reservationsApi = new CasinhaApi('/reservations');
  const { addGlobalLoading, removeGlobalLoading } = useInterface();

  async function fetchReservations() {
    try {
      addGlobalLoading();
      const response = await reservationsApi.getList();
      setReservations(response.data.slice(0, 5));
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <Page title="Painel de Controle">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3}>
          <Grid item lg={7} xs={12}>
            <LatestReservations reservations={reservations} />
          </Grid>
          <Grid item lg={5} xs={12}>
            <LatestCustomers />
          </Grid>
          <Grid item xs={12}>
            {/* <Stats reservations={reservations} /> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
