import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Page } from '@/components/Page';
import { Header } from '@/components/Header';
import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/casinhaApi';
import { ProductsTable } from './Table';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const productsApi = new CasinhaApi('/products');

  async function fetchProducts() {
    try {
      addGlobalLoading();
      const response = await productsApi.getList({
        size: 100
      });
      setProducts(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  async function handleDeleteProduct(id) {
    try {
      addGlobalLoading();
      const response = await productsApi.delete(id);
      setProducts(products.filter(p => p.id !== id));
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Page title="Casinhas">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Casinhas"
          textTypography="Casinhas"
          linkButtonTo="/casinhas/criar"
          textButton="Nova"
          textLink="Painel de Controle"
          buttonNew
        />
        <ProductsTable products={products} onDelete={handleDeleteProduct} />
      </Container>
    </Page>
  );
}
