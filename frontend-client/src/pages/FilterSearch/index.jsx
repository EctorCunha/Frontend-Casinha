import ptBr from 'date-fns/locale/pt-BR';
import { useEffect, useState } from 'react';
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  InputAdornment,
  Slider,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import {
  CalendarMonth as CalendarIcon,
  Check as CheckIcon,
  LocationOn as LocationOnIcon,
  AttachMoney as AttachMoneyIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import DatePicker, { registerLocale } from 'react-datepicker';
import { motion } from 'framer-motion';
import { areIntervalsOverlapping, format } from 'date-fns';
import { FlapDisplay, Presets } from 'react-split-flap-effect';
import { useInterface } from '@/hooks/useInterface';
import { ProductCard } from '@/components/ProductCard';
import { useReservation } from '@/hooks/useReservation';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Page } from '@/components/Page';
import {
  AutocompleteContainer,
  Banner,
  ContainerFilterSearch,
  DateBox,
  DatePickerContainer,
  DialogFooter,
  Filters,
  Products,
  PriceRange,
  FilterItem,
} from './styles';

registerLocale('ptBr', ptBr);

export function FilterSearch() {
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState(null);
  const [prices, setPrices] = useState([]);
  const [price, setPrice] = useState(0);
  const [names, setNames] = useState([]);
  const [name, setName] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchInterval, setSearchInterval] = useState(null);
  const [dateDialogIsOpen, setDateDialogIsOpen] = useState(false);
  const { getTakenIntervals } = useReservation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const city = params.get('city');
  const priceNight = params.get('price_night');
  const title = params.get('title');
  const startDateTimestamp = params.get('start_date');
  const endDateTimestamp = params.get('end_date');
  const locationsApi = new CasinhaApi('/cities');
  const productsApi = new CasinhaApi('/products');

  async function fetchProducts() {
    addGlobalLoading();
    const response = await productsApi.getList(/* parametros */);
    setProducts(response.data);
    removeGlobalLoading();
  }

  async function fetchLocations() {
    addGlobalLoading();
    const response = await locationsApi.getList();
    setLocations(response.data);
    removeGlobalLoading();
  }

  async function fetchPrices() {
    addGlobalLoading();
    const response = await productsApi.getList();
    setPrices(response.data);
    removeGlobalLoading();
  }

  async function fetchTitles() {
    addGlobalLoading();
    const response = await productsApi.getList();
    setNames(response.data);
    removeGlobalLoading();
  }

  useEffect(() => {
    fetchLocations();
    fetchPrices();
    fetchTitles();
  }, []);

  useEffect(() => {
    fetchProducts();
    if (startDateTimestamp && endDateTimestamp) {
      setSearchInterval({
        start: new Date(+startDateTimestamp),
        end: new Date(+endDateTimestamp),
      });
    }
  }, [params]);

  useEffect(() => {
    const foundLocation = locations.find(location => location.city === city);
    if (foundLocation) {
      setLocation(foundLocation);
    }

    if (searchInterval) {
      console.log(searchInterval);
      setStartDate(searchInterval.start);
      setEndDate(searchInterval.end);
    }
  }, [locations]);

  // Filtro de produtos
  const filteredProducts = products
    .filter(product => (city ? product.city.city === city : true))
    .filter(product => {
      const intervals = getTakenIntervals(product);
      if (!searchInterval) return true;
      if (intervals.length === 0) return true;

      return !intervals.some(interval =>
        areIntervalsOverlapping(searchInterval, {
          start: interval.start,
          end: interval.end,
        })
      );
    })
    .filter(product => (priceNight ? product.priceNight <= priceNight : true))
    .filter(product => (title ? product.title === title : true));

  // Função de callback onclick de "Pesquisar"
  function handleSearch() {
    const searchParams = {};

    if (startDate && endDate) {
      searchParams.start_date = startDate.getTime();
      searchParams.end_date = endDate.getTime();
    }

    if (location) {
      searchParams.city = location.city;
    }

    if (price) {
      searchParams.price_night = price;
    }

    if (name) {
      searchParams.title = name.title;
    }

    navigate({
      pathname: '/search',
      search: createSearchParams(searchParams).toString(),
    });
  }

  function calculateValue(value) {
    return value;
  }

  return (
    <Page
      title="Resultados da Pesquisa"
      description="Aqui você encontra o melhor conforto com simplicidade"
    >
      <ContainerFilterSearch>
        <Banner
          component={motion.div}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <FlapDisplay
            className="flapDisplay"
            chars={Presets.ALPHANUM + '?'}
            length={15}
            value={' qual casinha?'}
          />
        </Banner>
        <Container maxWidth="xl">
          <Grid container my={4}>
            <Filters>
              <Typography mb={1} fontWeight={700}>
                Filtros
              </Typography>
              <FilterItem>
                <AutocompleteContainer>
                  <Autocomplete
                    id="combo-box-demo"
                    options={locations}
                    getOptionLabel={option => option.city}
                    value={location}
                    onChange={(e, newValue) => setLocation(newValue)}
                    renderOption={(props, option) => (
                      <Box
                        {...props}
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                      >
                        <img
                          src={`//flagcdn.com/w20/${option.flagCode.toLowerCase()}.png`}
                          alt=""
                        />
                        {option.city} - {option.country}
                      </Box>
                    )}
                    renderInput={params => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Para onde vamos ?"
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocationOnIcon sx={{ color: '#2D4C2A' }} />
                            </InputAdornment>
                          ),
                          disableUnderline: true,
                        }}
                        fullWidth
                        sx={{}}
                      />
                    )}
                  />
                </AutocompleteContainer>
                <AutocompleteContainer>
                  <Autocomplete
                    id="combo-box-demo"
                    options={names}
                    getOptionLabel={option => option.title}
                    value={name}
                    onChange={(e, newValue) => setName(newValue)}
                    renderOption={(props, option) => (
                      <Box {...props} sx={{ mr: 2 }}>
                        {option.title}
                      </Box>
                    )}
                    renderInput={params => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Qual casinha ?"
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <InputAdornment position="start">
                              <HomeIcon sx={{ color: '#2D4C2A' }} />
                            </InputAdornment>
                          ),
                          disableUnderline: true,
                        }}
                        fullWidth
                        sx={{}}
                      />
                    )}
                  />
                </AutocompleteContainer>
                <DateBox
                  onClick={() => setDateDialogIsOpen(true)}
                  dateIsSelected={startDate && endDate}
                >
                  <CalendarIcon />
                  {startDate && endDate ? (
                    <Typography>
                      {format(startDate, 'dd/MM/yyyy')} -{' '}
                      {format(endDate, 'dd/MM/yyyy')}
                    </Typography>
                  ) : (
                    <Typography>Check in - Check out</Typography>
                  )}
                </DateBox>
                <PriceRange>
                  <AttachMoneyIcon />
                  <Slider
                    value={price}
                    max={5000}
                    scale={calculateValue}
                    onChange={(e, newValue) => setPrice(newValue)}
                    valueLabelDisplay="auto"
                  />
                  <Typography>
                    {calculateValue(price).toLocaleString('pt-BR')}
                  </Typography>
                </PriceRange>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                  fullWidth
                >
                  Pesquisar
                </Button>
              </FilterItem>
            </Filters>
            <Grid item md={12}>
              <Typography
                variant="h3"
                fontWeight={700}
                fontSize={24}
                sx={{ marginLeft: '15px' }}
              >
                {city && `${city}:`} {filteredProducts.length} casinhas
                disponíveis
              </Typography>
              <Products>
                <Grid container spacing={3}>
                  {filteredProducts
                    .sort((a, b) => b.priceNight - a.priceNight)
                    .map(product => (
                      <Grid item xs={12} sm={6} key={product.id}>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                </Grid>
              </Products>
            </Grid>
          </Grid>
        </Container>
      </ContainerFilterSearch>
      <Dialog
        open={dateDialogIsOpen}
        onClose={() => setDateDialogIsOpen(false)}
        maxWidth="md"
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, .7)',
          },
        }}
      >
        <DatePickerContainer>
          <DatePicker
            minDate={new Date()}
            monthsShown={2}
            selected={startDate}
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={([start, end]) => {
              setStartDate(start);
              setEndDate(end);
            }}
            locale="ptBr"
            inline
          />
        </DatePickerContainer>
        <DialogFooter>
          <IconButton onClick={() => setDateDialogIsOpen(false)}>
            <CheckIcon />
          </IconButton>
        </DialogFooter>
      </Dialog>
    </Page>
  );
}
