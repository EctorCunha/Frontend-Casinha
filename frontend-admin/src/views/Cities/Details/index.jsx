import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { Formik } from 'formik';
import { Page } from '@/components/Page';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Header } from '@/components/Header';
import { cityModel } from '@/models/CityModel';
import { useInterface } from '@/hooks/useInterface';
import { CityForm } from './CityForm';

export default function CityDetails() {
  const [city, setCity] = useState({});
  const { entityId } = useParams();
  const navigate = useNavigate();
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const citiesApi = new CasinhaApi('/cities');

  async function fetchUser() {
    try {
      addGlobalLoading();
      const response = await citiesApi.get(entityId);
      setCity(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  async function handleSubmit(values) {
    const edit = Boolean(city.id);
    const create = !Boolean(city.id);

    if (edit) {
      await usersApi.put(`${city.id}`, values);
    }

    if (create) {
      await usersApi.post(values);
    }

    navigate('/usuarios');
  }

  const initialValues = city.id ? city : cityModel;

  return (
    <Page title="Cidades">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Cidadess"
          textTypography={city.id ? 'Editar Cidade' : 'Adicionar Cidade'}
          textLink="Painel de Controle"
          linkToBreadcrumb="/cidades"
        />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {formikProps => {
            return <CityForm formikProps={formikProps} />;
          }}
        </Formik>
      </Container>
    </Page>
  );
}
