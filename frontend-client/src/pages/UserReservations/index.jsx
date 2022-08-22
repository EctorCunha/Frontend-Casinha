import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Page } from '@/components/Page';
import { ReservationCard } from './ReservationCard';
import desert01 from '@/assets/images/desert-01.avif';
import { Header, NoReservations, Image, Desert } from './styles';

export function UserReservations() {
  const { user } = useAuth();
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const [reservations, setReservations] = useState(null);
  const reservationsApi = new CasinhaApi('/reservations');

  async function fetchReservations() {
    try {
      addGlobalLoading();
      const response = await reservationsApi.getList();
      const userReservations = response.data.filter(
        reservation => reservation.user.id === user.id
      );
      setReservations(userReservations);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <Page
      title="Minhas Reservas"
      component={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <Header>
        <Image></Image>
        <Typography variant="h2">Minhas Reservas</Typography>
      </Header>
      {reservations && (
        <Box>
          {reservations.length === 0 ? (
            <NoReservations>
              <Desert>
                <img src={desert01} />
              </Desert>
              <Typography>Está um deserto aqui...</Typography>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained">Conheça nossas casinhas</Button>
              </Link>
            </NoReservations>
          ) : (
            <Container maxWidth="xl">
              <Grid container spacing={3} my={4}>
                {reservations
                  .sort((a, b) => b.startDate - a.startDate)
                  .map(reservation => (
                    <Grid item xs={12} sm={6} md={4}>
                      <ReservationCard reservation={reservation} />
                    </Grid>
                  ))}
              </Grid>
            </Container>
          )}
        </Box>
      )}
    </Page>
  );
}
