import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Formik } from 'formik';
import { Page } from '@/components/Page';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Header } from '@/components/Header';
import { CategoryForm } from './CategoryForm';
import { categoryModel } from '@/models/CategoryModel';
import { useNavigate, useParams } from 'react-router-dom';
import { useInterface } from '@/hooks/useInterface';

export default function CategoryDetails() {
  const [category, setCategory] = useState({});
  const navigate = useNavigate();
  const { entityId } = useParams();
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const categoriesApi = new CasinhaApi('/categories');

  async function fetchCategory() {
    try {
      addGlobalLoading();
      const response = await categoriesApi.get(entityId);
      setCategory(response.data);
    } catch {}
    finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  async function handleSubmit(values) {
    const edit = Boolean(category.id);
    const create = !Boolean(category.id);

    if (edit) {
      await categoriesApi.put(`${category.id}`, values);
    }

    if (create) {
      await categoriesApi.post(values);
    }

    navigate('/categorias');
  }

  const initialValues = category.id ? category : categoryModel;

  return (
    <Page title="Categoria">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Categoria"
          textTypography={
            category.id ? 'Editar Categoria' : 'Adicionar Categoria'
          }
          textLink="Painel de Controle"
          linkToBreadcrumb="/categorias"
        />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {formikProps => {
            return <CategoryForm formikProps={formikProps} />;
          }}
        </Formik>
      </Container>
    </Page>
  );
}
