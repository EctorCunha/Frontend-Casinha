import { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/CasinhaApi';
import { ProductCard } from '@/components/ProductCard';
import { Wrapper } from './styles';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const productsApi = new CasinhaApi('/products');

  async function fetchCategories() {
    try {
      addGlobalLoading();
      const response = await productsApi.getList();
      setProducts(response.data);
    } catch {
      addGlobalMessage('Erro ao buscar produtos', 'error');
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const productsToshow = 6;

  return (
    <Wrapper
      component={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2">Recomendações</Typography>
        <Grid container spacing={3}>
          {products.slice(0, productsToshow).map(product => (
            <Grid item xs={12} sm={6} md={6} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
