import { useEffect, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import {
  InputAdornment,
  Autocomplete,
  TextField,
  Typography,
  Box,
  Dialog,
  IconButton,
} from '@mui/material';
import {
  CalendarMonth as CalendarIcon,
  Check as CheckIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import {
  Wrapper,
  DateBox,
  SearchButton,
  DialogFooter,
  SearchContainer,
  DatePickerContainer,
  AutocompleteContainer,
} from './styles';

registerLocale('ptBr', ptBr);

export function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState(null);
  const locationsApi = new CasinhaApi('/cities');
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const [dateDialogIsOpen, setDateDialogIsOpen] = useState(false);
  const navigate = useNavigate();

  async function fetchLocations() {
    try {
      addGlobalLoading();
      const response = await locationsApi.getList();
      setLocations(response.data);
    } catch {
      addGlobalMessage('Erro ao buscar locais', 'error');
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchLocations();
  }, []);

  function onChange([start, end]) {
    setStartDate(start);
    setEndDate(end);
  }

  function handleSearch() {
    const searchParams = {};

    if (startDate && endDate) {
      searchParams.start_date = startDate.getTime();
      searchParams.end_date = endDate.getTime();
    }

    if (location) {
      searchParams.city = location.city;
    }

    navigate({
      pathname: 'search',
      search: createSearchParams(searchParams).toString(),
    });
  }

  return (
    <Wrapper
      component={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <SearchContainer>
        <AutocompleteContainer>
          <Autocomplete
            id="combo-box-demo"
            options={locations}
            getOptionLabel={option => option.city}
            value={location}
            onChange={(e, newValue) => setLocation(newValue)}
            renderOption={(props, option) => (
              <Box {...props} sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
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
                placeholder="Para onde vamos?"
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
              onChange={onChange}
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
        <SearchButton
          color="secondary"
          variant="contained"
          onClick={handleSearch}
        >
          Buscar
        </SearchButton>
      </SearchContainer>
    </Wrapper>
  );
}
