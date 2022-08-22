import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import { ProductCard } from '@/components/ProductCard';
import { Page } from '@/components/Page';
import { Title, Product, CategoryImage, ContainerCategory } from './styles';

export function Category() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const productsApi = new CasinhaApi('/products');
  const categoriesApi = new CasinhaApi('/categories');
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();

  async function fetchCategories() {
    try {
      addGlobalLoading();
      const response = await categoriesApi.getList();
      setCategories(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  async function fetchProducts() {
    try {
      addGlobalLoading();
      const response = await productsApi.getList();
      setProducts(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return categories
    .filter(category => category.id == params.id)
    .map(category => (
      <Page title="Categorias">
      <ContainerCategory>
        <CategoryImage>
          <img
            className="img_category"
            src={category.image}
            alt={category.name}
          />
          <Title>
            <Typography variant="h1">
              {category.title.toUpperCase()}{' '}
            </Typography>
            <Typography variant="h2">{category.description}</Typography>
          </Title>
        </CategoryImage>
        <Product>
          <Grid container spacing={3}>
            {products
              .filter(product => product.categories[0].id == params.id)
              .map(product => (
                <Grid item md={6} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
          </Grid>
        </Product>
      </ContainerCategory>
      </Page>
    ));
}
