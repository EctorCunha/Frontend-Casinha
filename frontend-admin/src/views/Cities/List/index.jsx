import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Page } from '@/components/Page';
import { Header } from '@/components/Header';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import { CitiesTable } from './Table';

export default function CityList() {
  const [cities, setCities] = useState([]);
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const citiesApi = new CasinhaApi('/cities');

  async function fetchCities() {
    try {
      addGlobalLoading();
      const response = await citiesApi.getList();
      setCities(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <Page title="Cidades">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Cidades"
          textTypography="Cidades"
          linkButtonTo="/cidades/criar"
          textButton="Nova"
          textLink="Painel de Controle"
          buttonNew
        />
        {cities && <CitiesTable cities={cities} />}
      </Container>
    </Page>
  );
}
