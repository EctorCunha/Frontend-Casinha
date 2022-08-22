import { useState, useEffect } from 'react';
import { Typography, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Page } from '@/components/Page';
import { ReviewCard } from './ReviewCard';
import { Header, Image, SectionHeading } from './styles';

export function UserReviews() {
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

  function renderRatedReservations() {
    const ratedReservations =
      reservations?.filter(r => Boolean(r.review)) || [];
    if (ratedReservations.length === 0) {
      return <Typography>Você ainda não avaliou nenhuma reserva</Typography>;
    }
    return ratedReservations.map(reservation => (
      <Grid item xs={12} mb={2}>
        <ReviewCard reservation={reservation} />
      </Grid>
    ));
  }

  function renderUnratedReservations() {
    const unratedReservations =
      reservations?.filter(r => !Boolean(r.review)) || [];
    if (unratedReservations.length === 0) {
      return <Typography>Você não tem reservas para avaliar</Typography>;
    }
    return unratedReservations
      .sort((a, b) => b.startDate - a.startDate)
      .map(reservation => (
        <Grid item xs={12} mb={2}>
          <ReviewCard reservation={reservation} />
        </Grid>
      ));
  }

  return (
    <Page
      title="Reviews"
      component={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <Header>
        <Image></Image>
        <Typography variant="h2">Minhas Avaliações</Typography>
      </Header>
      <Container maxWidth="xl">
        <Grid container my={5}>
          <Grid item xs={12}>
            <SectionHeading>Reservas não avaliadas</SectionHeading>
            {renderUnratedReservations()}
          </Grid>
          <Grid item xs={12} mt={4}>
            <SectionHeading>Reservas Avaliadas</SectionHeading>
            {renderRatedReservations()}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
