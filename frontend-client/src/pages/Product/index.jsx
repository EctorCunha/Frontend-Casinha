import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  DialogContent,
  Grid,
  IconButton,
  Container,
  Rating,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  LocationOn as LocationOnIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import { useReservation } from '@/hooks/useReservation';
import { useCharacteristics } from '@/hooks/useCharacteristics';
import { Page } from '@/components/Page';
import { Breadcrumb } from '@/components/Breadcrumb';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Map,
  Header,
  Gallery,
  Location,
  Description,
  Reservation,
  SectionTitle,
  GalleryDialog,
  Characteristics,
  StartReservation,
  GalleryDialogThumbs,
  Reviews,
  ReviewsItem,
} from './styles';
import { HTMLView } from '@/components/HTMLView';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import enIE from 'date-fns/esm/locale/en-IE/index.js';

export function Product() {
  const { id } = useParams();
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const productsApi = new CasinhaApi('/products');
  const [product, setProduct] = useState(null);
  const [coordes, setCoordes] = useState(0);
  const [galleryDialogIsOpen, setGalleryDialogIsOpen] = useState(false);
  const [galleryDialogThumbsSlider, setGalleryDialogThumbsSlider] =
    useState(null);
  const [currentThumb, setCurrentThumb] = useState(1);
  const characteristics = useCharacteristics();
  const { getTakenIntervals } = useReservation();

  async function fetchProduct() {
    try {
      addGlobalLoading();
      const response = await productsApi.get(id);
      const data = {
        ...response.data,
        reviews: getReviews(response.data)
      }
      setProduct(data);
    } catch {
      addGlobalMessage('Erro ao buscar produto', 'error');
    } finally {
      removeGlobalLoading();
    }
  }

  async function fetchCoordes() {
    try {
      addGlobalLoading();
      const response = await productsApi.get(id);
      const data = {
        ...response.data,
        reviews: getReviews(response.data),
      };
      setCoordes(data);
    } catch {
      addGlobalMessage('Erro ao buscar coordenadas', 'error');
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchProduct();
    fetchCoordes()
  }, []);

  function getReviews(product) {
    const productReservations = product.reservations;
    if (!Boolean(productReservations)) {
      return;
    }
    const reviews = [];
    productReservations.forEach(reservation => {
      const review = reservation.review;
      if (Boolean(review)) {
        reviews.push(review);
      }
    });
    return reviews;
  }

  function generateCharacteristicsBlock() {
    const content = [];
    const productCharacteristicsKeys = Object.keys(
      product.characteristics
    ).filter(c => !['id', 'checkIn', 'checkOut'].includes(c));

    for (const key of productCharacteristicsKeys) {
      const value = product.characteristics[key];
      const characteristic = characteristics[key];

      if (typeof value === 'boolean' && value === true) {
        content.push(
          <Grid item md={3} xs={6}>
            <Box
              key={key}
              display="flex"
              alignItems="center"
              gap={1}
              padding={2}
            >
              {characteristic.icon}
              <Typography variant="caption">{characteristic.title}</Typography>
            </Box>
          </Grid>
        );
      }

      if (typeof value === 'number') {
        content.push(
          <Grid item md={3} xs={6}>
            <Box
              key={key}
              display="flex"
              alignItems="center"
              gap={1}
              padding={2}
            >
              {characteristic.icon}
              <Typography variant="caption">
                {characteristic.title}: {value}
              </Typography>
            </Box>
          </Grid>
        );
      }
    }

    return content;
  }

  const breadcrumbsItems = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: `${product?.categories[0].title}`,
      link: `/category/${product?.categories[0].id}`,
    },
    {
      text: `${product?.title}`,
      link: `/products/${product?.id}`,
    },
  ];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: REACT_APP_API_KEY_GOOGLE
  })

  const position = {
    lat: coordes.latitude,
    lng: coordes.longitude,
  }


  console.log(product)

  return product ? (
    <Page title={product.title}>
      <Header>
        <Box>
          <Typography fontSize={14} fontWeight={700}>
            {product.categories[0]?.title}
          </Typography>
          <Typography fontSize={24} fontWeight={700}>
            {product.title}
          </Typography>
        </Box>
        <Link to="/">
          <ChevronLeftIcon sx={{ fontSize: 48 }} />
        </Link>
      </Header>
      <Location>
        <LocationOnIcon />
        <Box>
          <Typography fontSize={14} fontWeight={500}>
            {product.address}, {product.city.city} - {product.city.state},{' '}
            {product.city.country}
          </Typography>
        </Box>
      </Location>
      <Breadcrumb items={breadcrumbsItems} />
      <Container maxWidth="xl">
        <Gallery>
          {product.images.slice(0, 5).map((image, index) => (
            <img
              src={image.url}
              key={image.url}
              onClick={() => setGalleryDialogIsOpen(true)}
            />
          ))}
          <Button onClick={() => setGalleryDialogIsOpen(true)}>Ver mais</Button>
        </Gallery>
        <GalleryDialog
          open={galleryDialogIsOpen}
          fullWidth
          maxWidth="md"
          onClose={() => setGalleryDialogIsOpen(false)}
          BackdropProps={{
            sx: {
              backgroundColor: 'rgba(45, 76, 42, .95)',
            },
          }}
          PaperProps={{
            sx: {
              borderRadius: '8px',
              overflow: 'hidden',
            },
          }}
        >
          <DialogContent>
            <IconButton
              size="small"
              onClick={() => setGalleryDialogIsOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <Swiper
              slidesPerView={1}
              thumbs={{
                swiper:
                  galleryDialogThumbsSlider &&
                    !galleryDialogThumbsSlider.destroyed
                    ? galleryDialogThumbsSlider
                    : null,
              }}
              modules={[FreeMode, Thumbs]}
            >
              {product.images.map((image, index) => (
                <SwiperSlide>
                  <img key={image.url} src={image.url} />
                </SwiperSlide>
              ))}
            </Swiper>
            <GalleryDialogThumbs>
              <Typography>
                {currentThumb} / {product.images.length}
              </Typography>
              <Swiper
                onSlideChange={() => console.log(1)}
                onSwiper={setGalleryDialogThumbsSlider}
                spaceBetween={8}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
              >
                {product.images.map((image, index) => (
                  <SwiperSlide onClick={e => setCurrentThumb(index + 1)}>
                    <img key={image.url} src={image.url} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </GalleryDialogThumbs>
          </DialogContent>
        </GalleryDialog>

        <Characteristics>
          <SectionTitle variant="h2">O que esse lugar oferece?</SectionTitle>
          <Grid container>{generateCharacteristicsBlock()}</Grid>
        </Characteristics>

        <Description>
          <SectionTitle variant="h2">{product.title}</SectionTitle>
          <HTMLView html={product.description} />
        </Description>
        <Description>
          <SectionTitle variant="h2">Políticas</SectionTitle>
          <HTMLView html={product.houseRules} />
        </Description>
      </Container>
      <Reservation>
        <Container maxWidth="xl">
          <SectionTitle variant="h2">Datas disponíveis</SectionTitle>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <DatePicker
                minDate={new Date()}
                monthsShown={2}
                selectsRange
                locale="ptBr"
                inline
                excludeDateIntervals={getTakenIntervals(product)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
              >
                <StartReservation>
                  <Typography variant="h2">
                    R$ {(product.priceNight).toLocaleString('pt-BR')} / noite
                  </Typography>
                  <Typography variant="h3">
                    Adicione as datas da sua viagem para obter preços exatos
                  </Typography>
                  <Link
                    to={`/products/${id}/reservation`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      size="large"
                      fullWidth
                      type="submit"
                      variant="contained"
                      color="secondary"
                    >
                      Iniciar reserva
                    </Button>
                  </Link>
                </StartReservation>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Reservation>
      {isLoaded ?(
      <Map>
        <Container maxWidth="xl">
          <SectionTitle variant="h2">Onde você vai estar?</SectionTitle>
        </Container>
        <GoogleMap
        mapContainerStyle={{width:'78%', height:'450px'}}
        center={position}
        zoom={11}
      >
        <Marker position={position}  />
      </GoogleMap>
      </Map>) : null}
      <Reviews>
        <Container maxWidth="xl">
         {product.reviews.length == 1 ? <SectionTitle variant="h2">1 avaliação </SectionTitle> : <SectionTitle variant="h2"> {product.reviews.length} avaliações </SectionTitle> }
          {product.reviews.length !== 0 ? product.reviews.map(review => (
            <ReviewsItem>
              {/* Colocar key.prop */}
              <Rating value={review.score} size="small" readOnly className="rating" />
              <Typography>{new Date(review.reviewMoment).toLocaleDateString('pt-br')} - {review.reviewer}</Typography>
              <Typography>{review.title}</Typography>
              <Typography>{review.text}</Typography>
            </ReviewsItem>
          )) :
            <Box>
              <Typography>Casinha sem avaliações</Typography>
            </Box>
          }
        </Container>
      </Reviews>
    </Page>
  ) : null;
}
