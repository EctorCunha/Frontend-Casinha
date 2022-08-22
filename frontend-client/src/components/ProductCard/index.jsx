import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

export function ProductCard({ product }) {
  const { id, images, categories, title, city, description } = product;
  const shortDescription = description.substr(0, 150);
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const favoriteApi = new CasinhaApi('/users/favorite');
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  async function handleAddFavorite(id) {
    try {
      addGlobalLoading();
      await favoriteApi.get(id);
      if (isFavorite == true) {
        addGlobalMessage(
          'Casinha removida dos favoritos',
          'success'
        );
      } else {
        addGlobalMessage(
          'Casinha adicionada nos favoritos',
          'success'
        );
      }
    } catch {
      addGlobalMessage(
        'Necessário fazer o login',
        'error'
      );
      navigate('/login');
    } finally {
      removeGlobalLoading();
    }
  }

  const handleChange = (event) => {
    setIsFavorite(event.target.checked);
  };

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} lg={5} sx={{ height: 280 }}>
          <CardMedia
            component="img"
            image={`${images[0].url}`}
            alt={title}
            height="100%"
          />
          <Checkbox
            checked={isFavorite}
            className="heart"
            onChange={handleChange}
            icon={
              <FavoriteIcon
                alt="Coração de favoritar"
                sx={{ color: 'white' }}
              />
            }
            checkedIcon={
              <FavoriteIcon
                alt="Coração de favoritar"
                sx={{ color: '#c12d34' }}
              />
            }
            onClick={() => { handleAddFavorite(product.id) }}
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
              <Typography>
                R$ {product.priceNight.toLocaleString('pt-BR')} / noite
              </Typography>
            </Box>
            <Typography variant="h3" className="title">
              {title}
            </Typography>
            <Rating value={product.rating} size="small" readOnly className="rating" />
            <Box className="location">
              <LocationOnIcon />
              <Typography>{city.city} </Typography>
            </Box>
            <Box className="description">
              <Box>{shortDescription}...</Box>
            </Box>
            <Button
              component={Link}
              to={`/products/${id}`}
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ textTransform: 'initial' }}
            >
              Ver detalhes
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
