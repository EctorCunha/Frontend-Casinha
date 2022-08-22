import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Page } from '@/components/Page';
import { Header } from '@/components/Header';
import { CasinhaApi } from '@/services/CasinhaApi';
import { CategoriesTable } from './Table';
import { useInterface } from '@/hooks/useInterface';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const categoriesApi = new CasinhaApi('/categories');

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

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Page title="Categorias">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Categorias"
          textTypography="Categorias"
          linkButtonTo="/categorias/criar"
          textButton="Nova"
          textLink="Painel de Controle"
          buttonNew
        />
        {categories && <CategoriesTable categories={categories} />}
      </Container>
    </Page>
  );
}
