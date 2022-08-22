import { Box, Card, DialogContent, styled } from "@mui/material";

export const ContainerFilterSearch = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '& ::-webkit-scrollbar': {
    width: '0px',
  },

  [theme.breakpoints.down('md')]: {
    display: 'grid',
  },
}));

export const Banner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1024&q=70)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '25vh',

  '& .flapDisplay [data-kind="digit"]': {
    backgroundColor: 'black',
    fontSize: '8vh',
    [theme.breakpoints.down('md')]: {
      fontSize: '5vh',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5vh',
    },
  },
}));

export const Products = styled(Box)(({ theme }) => ({
  marginTop: 16,
  padding: '0 15px 15px 15px',
  [theme.breakpoints.down('md')]: {
    marginTop: 24
  }
}));

export const Filters = styled(Card)(({ theme }) => ({
  padding: 16,
  backgroundColor: '#ccc',
  marginBottom: 16,
  width: '100%',
}));

export const FilterItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 10,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    }
}));

export const AutocompleteContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  '.MuiAutocomplete-root': {
    width: '100%',
  },
  '.MuiFormControl-root': {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    '&:hover': {
      borderColor: 'red',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  '.MuiInput-root': {
    padding: 0,
    height: 40,
    paddingLeft: 8,
  },
}));

export const DateBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'dateIsSelected',
})(({ theme, dateIsSelected }) => ({
  width: '100%',
  backgroundColor: '#ffffff',
  color: dateIsSelected ? 'rgba(0, 0, 0, 0.87)' : '#A2A2A2',
  fontSize: 16,
  borderRadius: 4,
  padding: 8,
  cursor: 'text',
  display: 'flex',
  gap: 8,
  p: {
    cursor: 'inherit',
  },
  svg: {
    fill: '#2D4C2A',
    marginTop: -2,
  },
}));

export const DatePickerContainer = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: 0,
  '.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,  .react-datepicker__day--keyboard-selected':
  {
    backgroundColor: '#5B8B1D !important',
    borderRadius: 2,
  },
  '.react-datepicker__header': {
    backgroundColor: '#2D4C2A',
    borderRadius: 0,
  },
  '.react-datepicker__current-month': {
    padding: 16,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  '.react-datepicker__day-names': {
    paddingLeft: 40,
    paddingRight: 40,
  },
  '.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header, .react-datepicker__day-name':
  {
    color: '#FFFFFF',
  },

  '.react-datepicker': {
    width: '100%',
    border: 'none',
    '.react-datepicker__month-container': {
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    '.react-datepicker__month': {
      paddingTop: 24,
      paddingBottom: 16,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    '.react-datepicker__day': {
      width: 32,
      height: 32,
      lineHeight: '32px',
      [theme.breakpoints.down('sm')]: {
        width: 28,
        height: 28,
      },
    },
    '.react-datepicker__day-name': {
      width: 32,
      [theme.breakpoints.down('sm')]: {
        width: 28,
      },
    },
    '.react-datepicker__day--outside-month': {
      visibility: 'hidden',
      height: 'auto',
    },
  }
}));

export const DialogFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: 16,
  [theme.breakpoints.down('sm')]: {
    paddingBottom: 5,
  },
  svg: {
    width: 32,
    height: 32,
  },
}));

export const PriceRange = styled(Box)({
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 4,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 10px',
  gap: 15,
});
