import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Tabs, Tab, Divider, Button } from '@mui/material';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import { Page } from '@/components/Page';
import { Header } from '@/components/Header';
import { ProductForm } from './ProductForm';
import { Link } from "react-router-dom";

const tabs = [
  { value: 'productGeneral', label: 'Geral' },
  { value: 'productLocation', label: 'Localização' },
  { value: 'productCharacteristics', label: 'Atributos' },
  { value: 'productPolicies', label: 'Políticas' },
  { value: 'productGallery', label: 'Imagens' },
];

export default function ProductDetails() {
  const { entityId } = useParams();
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const [currentTab, setCurrentTab] = useState('productGeneral');
  const citiesApi = new CasinhaApi('/cities');
  const categoriesApi = new CasinhaApi('/categories');
  const productsApi = new CasinhaApi('/products');
  let submitMyForm = null;

  async function fetchProduct() {
    try {
      addGlobalLoading();
      const response = await productsApi.get(entityId);
      setProduct(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

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
    fetchProduct();
    fetchCategories();
    fetchCities();
  }, []);

  function handleTabsChange(event, value) {
    setCurrentTab(value);
  }

  function handleSubmitMyForm() {
    if (submitMyForm) {
      submitMyForm();
    }
  }

  function bindSubmitForm(submitForm) {
    submitMyForm = submitForm;
  }

  return (
    <Page title="Casinha">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Casinhas"
          textTypography={product.id ? 'Editar Casinha' : 'Adicionar Casinha'}
          textLink="Painel de Controle"
          linkToBreadcrumb="/casinhas"
        />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            variant="scrollable"
            textColor="secondary"
          >
            {tabs.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3} mb={3}>
          <ProductForm
            product={product}
            categories={categories}
            cities={cities}
            bindSubmitForm={bindSubmitForm}
            currentTab={currentTab}
          />
        </Box>
        <Divider />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Box ml={2}>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              onClick={handleSubmitMyForm}
              component={Link} to="/casinhas/sucesscreation"
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Container>
    </Page>
  );
}
