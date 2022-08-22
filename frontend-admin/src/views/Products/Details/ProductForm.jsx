import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { CasinhaApi } from '@/services/CasinhaApi';
import { productModel } from '@/models/ProductModel';
import { useInterface } from '@/hooks/useInterface';
import { TabGeneral } from './TabGeneral';
import { TabCharacteristics } from './TabCharacteristics';
import { TabGallery } from './TabGallery';
import { TabLocation } from './TabLocation';
import { TabPolicies } from './TabPolicies';

export function ProductForm({
  currentTab,
  product,
  categories,
  cities,
  bindSubmitForm,
}) {
  const navigate = useNavigate();
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const productsApi = new CasinhaApi('/products');

  async function updateProduct(values) {
    

    await productsApi.post(data);
  }

  async function handleSubmit(values) {
    const edit = Boolean(product.id);
    const create = !Boolean(product.id);
    const data = new FormData();

    if (edit) {
      data.append('id', values.id)
    }

    // General Tab
    data.append('title', values.title);
    data.append('description', values.description);
    data.append('priceNight', values.priceNight);
    for (let key in values.categories) {
      data.append(`categories[${key}].id`, values.categories[key].id);
    }

    // Location Tab
    data.append('address', values.address);
    data.append('latitude', values.latitude);
    data.append('longitude', values.longitude);
    data.append('city.id', values.city.id);

    // Attributes Tab
    for (let key in values.characteristics) {
      data.append(`characteristics.${key}`, values.characteristics[key]);
    }

    // Policies Tab
    data.append('houseRules', values.houseRules);

    // Gallery Tab
    for (let key in values.images) {
      data.append(`uploadingFiles[${key}]`, values.images[key].file);
    }

    try {
      addGlobalLoading();
      if (edit) {
        await productsApi.patch(data);
      }
      if (create) {
        await productsApi.post(data);;
      }
      navigate('/casinhas');
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  return (
    <>
      <Formik
        initialValues={product.id ? product : productModel}
        enableReinitialize
        validateOnBlur={true}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {formikProps => {
          bindSubmitForm(formikProps.submitForm);

          return (
            <>
              {currentTab === 'productGeneral' && (
                <TabGeneral categories={categories} formikProps={formikProps} />
              )}
              {currentTab === 'productLocation' && (
                <TabLocation cities={cities} formikProps={formikProps} />
              )}
              {currentTab === 'productCharacteristics' && (
                <TabCharacteristics formikProps={formikProps} />
              )}
              {currentTab === 'productPolicies' && (
                <TabPolicies formikProps={formikProps} />
              )}
              {currentTab === 'productGallery' && (
                <TabGallery formikProps={formikProps} />
              )}
            </>
          );
        }}
      </Formik>
    </>
  );
}
