import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  Typography,
  Rating,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import { Wrapper } from './styles';

import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/CasinhaApi';

export function FavoriteCard({ favorite, handleChange }) {
  const { id, images, categories, title, city, description } = favorite;
  const shortDescription = description.substr(0, 80);
  const [isFavorite, setIsFavorite] = useState(true);

  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const favoriteApi = new CasinhaApi('/users/favorite');

  async function handleAddFavorite(id) {
    try {
      addGlobalLoading();
      await favoriteApi.get(id);
      setIsFavorite(false);
      addGlobalMessage(
        'Casinha removida dos favoritos',
        'success'
      );
    } catch {
      addGlobalMessage(
        'Erro ao remover casinha nos favoritos.',
        'error'
      );
    } finally {
      removeGlobalLoading();
    }
  }

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} lg={5} sx={{ height: 280 }}>
          <CardMedia
            component="img"
            image={`${images[0].url}`}
            alt="Casa Teste"
            height="100%"
          />
          <Checkbox
            checked={isFavorite}
            onClick={() => {handleAddFavorite(favorite.id) }}
            className="heart"
            onChange={handleChange}
            icon={<FavoriteIcon sx={{ color: 'white' }} />}
            checkedIcon={<FavoriteIcon sx={{ color: '#c12d34' }} />}
          />
        </Grid>
        <Grid item xs={12} lg={7} width="100%">
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap="4px"
              mb={1}
            >
              <Typography className="category">
                {categories[0]?.title}
              </Typography>
              <Typography>R$ {favorite.priceNight} / noite</Typography>
            </Box>
            <Typography variant="h3" className="title">
              {title}
            </Typography>
            <Rating value={3} size="small" readOnly className="rating" />
            <Box className="location">
              <LocationOnIcon />
              <Typography>{city.city} - </Typography>
              <a href="//maps.google.com">Mostrar no Mapa</a>
            </Box>
            <Box className="description">
              <Box>{shortDescription}...</Box>
              <Box>
                <Link to={`/products/${id}`}>Mais informações...</Link>
              </Box>
            </Box>
            <Button
              component={Link}
              to={`/products/${id}`}
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ textTransform: 'initial' }}
            >
              Reservar
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
