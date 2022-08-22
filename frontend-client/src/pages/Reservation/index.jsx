import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Rating,
  TextField,
  Typography,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  CheckCircleOutline as CheckIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { areIntervalsOverlapping, format } from 'date-fns';
import DatePicker from 'react-datepicker';
import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/CasinhaApi';
import { arrivalTimes } from '@/utils/arrivalTimes';
import { useAuth } from '@/hooks/useAuth';
import { useReservation } from '@/hooks/useReservation';
import { Page } from '@/components/Page';
import {
  Header,
  ArrivalTime,
  DateSelection,
  ReservationDetails,
  SectionTitle,
  UserData,
} from './styles';
import { Breadcrumb } from '@/components/Breadcrumb';

export function Reservation() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [dateSelectionError, setDateSelectionError] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const { getTakenIntervals } = useReservation();
  const productsApi = new CasinhaApi('/products');
  const reservationsApi = new CasinhaApi('/reservations');
  const calculateDays = Math.ceil((endDate - startDate)/(100000*36*24))

  async function fetchProduct() {
    try {
      addGlobalLoading();
      const response = await productsApi.get(id);
      setProduct(response.data);
    } catch {
      addGlobalMessage('Erro ao buscar produto', 'error');
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  function onChange([start, end]) {
    setStartDate(start);
    setEndDate(end);
  }

  async function handleSubmit(values) {
    if (dateSelectionError) {
      return;
    }
    const payload = {
      user: { id: user.id },
      product: { id: product.id },
      startDate,
      endDate,
      arrivalTime: values.arrivalTime,
      status: 'confirmada'
    };
    try {
      addGlobalLoading();
      await reservationsApi.post(payload);
      navigate('/successreservation');
    } catch {
      addGlobalMessage(
        'Erro ao finalizar reserva, tente novamente mais tarde.',
        'error'
      );
    } finally {
      removeGlobalLoading();
    }
  }

  function validateDateSelecion() {
    if (!endDate) {
      return setDateSelectionError('Selecione a data de check-out');
    }

    const intervals = getTakenIntervals(product);
    const isInvalidRange = intervals.some(interval =>
      areIntervalsOverlapping(
        {
          start: startDate,
          end: endDate,
        },
        {
          start: interval.start,
          end: interval.end,
        }
      )
    );
    console.log(isInvalidRange);

    if (isInvalidRange) {
      return setDateSelectionError('Selecione um período válido');
    }

    setDateSelectionError('');
  }

  const initialValues = {
    name: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.username || '',
    city: '',
    arrivalTime: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    lastName: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório'),
    city: Yup.string().required('Campo obrigatório'),
    arrivalTime: Yup.string().required('Campo obrigatório'),
  });

  const breadcrumbsItems = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: `${product?.categories[0].title}`,
      link: `/category/${product?.categories[0].id}`,
    },
    {
      text: `${product?.title}`,
      link: `/products/${product?.id}`,
    },
    {
      text: `Reservar`,
      link: `/products/${product?.id}/reservation`,
    },
  ];

  return (
    product && (
      <Page title={`${product.title} - Reserva`}>
        <Header>
          <Box>
            <Typography fontSize={14} fontWeight={700}>
              {product.categories[0]?.title}
            </Typography>
            <Typography fontSize={24} fontWeight={700}>
              {product.title}
            </Typography>
          </Box>
          <Link to={`/products/${id}`}>
            <ChevronLeftIcon sx={{ fontSize: 48 }} />
          </Link>
        </Header>
        <Breadcrumb items={breadcrumbsItems} />
        <Container maxWidth="xl" sx={{ paddingBottom: 8 }}>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {formikProps => {
              const {
                values,
                handleSubmit,
                handleChange,
                handleBlur,
                touched,
                errors,
              } = formikProps;
              return (
                <Form onSubmit={handleSubmit}>
                  <Grid container columnSpacing={4}>
                    <Grid item xs={12} md={8}>
                      <SectionTitle variant="h3">
                        Complete seus dados
                      </SectionTitle>
                      <UserData>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                              <TextField
                                name="name"
                                label="Nome"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && errors.name}
                                helperText={touched.name && errors.name}
                                disabled
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControl variant="filled" fullWidth>
                              <TextField
                                name="lastName"
                                label="Sobrenome"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.lastName && errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                disabled
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" fullWidth>
                              <TextField
                                type="email"
                                name="email"
                                label="E-mail"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && errors.email}
                                helperText={touched.email && errors.email}
                                disabled
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" fullWidth>
                              <TextField
                                name="city"
                                label="Cidade"
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.city && errors.city}
                                helperText={touched.city && errors.city}
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </UserData>

                      <SectionTitle variant="h3">
                        Selecione sua data de reserva
                      </SectionTitle>
                      <DateSelection
                        className={
                          dateSelectionError ? 'dateSelection--error' : ''
                        }
                      >
                        <DatePicker
                          minDate={new Date()}
                          monthsShown={2}
                          selected={startDate}
                          selectsRange
                          startDate={startDate}
                          endDate={endDate}
                          onChange={onChange}
                          locale="ptBr"
                          inline
                          excludeDateIntervals={getTakenIntervals(product)}
                        />
                      </DateSelection>
                      {dateSelectionError && (
                        <Typography color="#D32F2F" fontSize={12} ml={2} mt={1}>
                          {dateSelectionError}
                        </Typography>
                      )}

                      <SectionTitle variant="h3">
                        Seu horário de chegada
                      </SectionTitle>
                      <ArrivalTime>
                        <Typography variant="h4">
                          <CheckIcon />
                          Seu quarto estará pronto para checkin entre 10h00 e
                          23h00
                        </Typography>
                        <Typography>
                          Indique a sua hora prevista de chegada
                        </Typography>
                        <Grid container>
                          <Grid item xs={12} md={6}>
                            <TextField
                              select
                              fullWidth
                              name="arrivalTime"
                              value={values.arrivalTime || 0}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.arrivalTime && errors.arrivalTime}
                              helperText={
                                touched.arrivalTime && errors.arrivalTime
                              }
                            >
                              <MenuItem value={0} disabled>
                                Selecione sua hora de chegada
                              </MenuItem>
                              {arrivalTimes.map(item => (
                                <MenuItem key={item} value={item}>
                                  {item}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                        </Grid>
                      </ArrivalTime>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <ReservationDetails>
                        <CardHeader title="Detalhes da Reserva" />
                        <CardMedia
                          component="img"
                          src={product.images[0].url}
                        />
                        <CardContent>
                          <Typography variant="h3">
                            {product.categories[0].title}
                          </Typography>
                          <Typography variant="h4">{product.title}</Typography>
                          <Rating
                            value={4.5}
                            readOnly
                            size="small"
                            sx={{ color: '#ffdc82' }}
                          />
                          <Box display="flex" alignItems="center" mt={2} mb={4}>
                            <LocationIcon />
                            <Typography variant="h5">
                              {product.address}, {product.city.city},{' '}
                              {product.city.state}, {product.city.country}
                            </Typography>
                          </Box>
                          <Box mb={8}>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              padding={2}
                              borderTop="1px solid #B5AEA8"
                              borderBottom="1px solid #B5AEA8"
                            >
                              <Typography variant="caption">
                                Check-in
                              </Typography>
                              <time>
                                {startDate && format(startDate, 'dd/MM/yyyy')}
                              </time>
                            </Box>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              padding={2}
                              borderBottom="1px solid #B5AEA8"
                            >
                              <Typography variant="caption">
                                Check-out
                              </Typography>
                              {endDate ? (
                                <time>{format(endDate, 'dd/MM/yyyy')}</time>
                              ) : (
                                <small>Não selecionada</small>
                              )}
                            </Box>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              padding={2}
                              borderBottom="1px solid #B5AEA8"
                            >
                              <Typography variant="caption">
                                Valor total
                              </Typography>
                              <small>
                                {startDate && endDate ? calculateDays : 1} diária(s) por R$ { startDate && endDate ? (product.priceNight*calculateDays).toLocaleString('pt-BR') : (product.priceNight).toLocaleString('pt-BR')}
                              </small>
                            </Box>
                          </Box>
                          <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            size="large"
                            fullWidth
                            onClick={validateDateSelecion}
                          >
                            Confirmar reserva
                          </Button>
                        </CardContent>
                      </ReservationDetails>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </Page>
    )
  );
}
