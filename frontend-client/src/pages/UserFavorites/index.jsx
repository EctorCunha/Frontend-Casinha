import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Page } from '@/components/Page';
import park02 from '@/assets/images/duck-02.avif';
import { Header, NoFavorite, Title, Letter, Park } from './styles';
import { FavoriteCard } from './FavoriteCard';

export function UserFavorites() {
  const { addGlobalLoading, removeGlobalLoading } =
    useInterface();
  const [favorites, setFavorites] = useState([]);
  const favoritesApi = new CasinhaApi('/users/favorites');

  async function fetchFavorites() {
    try {
      addGlobalLoading();
      const response = await favoritesApi.getList();
      const userFavorites = response.data;
      setFavorites(userFavorites);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  const handleChange = () => {
    setTimeout(() => {
      fetchFavorites();
    }, 300);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <Page
      title="Favoritos"
      component={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <Header>
        <Title>
          <Letter>F</Letter>
          <Letter>A</Letter>
          <Letter>V</Letter>
          <Letter>O</Letter>
          <Letter>R</Letter>
          <Letter>I</Letter>
          <Letter>T</Letter>
          <Letter>O</Letter>
          <Letter>S</Letter>
        </Title>
      </Header>
      {favorites && (
        <Box>
          {favorites.length === 0 ? (
            <NoFavorite>
              <Park>
                <img src={park02} />
              </Park>
              <Typography>Sem favoritos?</Typography>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained">Conheça nossas casinhas</Button>
              </Link>
            </NoFavorite>
          ) : (
            <Container maxWidth="xl">
              <Grid container spacing={3} my={4}>
                {favorites.map(favorite => (
                  <Grid item md={6} key={favorite.id}>
                    <FavoriteCard
                      favorite={favorite}
                      handleChange={handleChange}
                      />
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
