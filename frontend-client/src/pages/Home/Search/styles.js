import { Box, Button, DialogContent, styled } from "@mui/material";


export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  transform: 'translateY(-50%)',
  paddingLeft: 12,
  paddingRight: 12,
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  width: '100%',
  maxWidth: 1140,
  padding: 4,
  borderRadius: 8,
  flexShrink: 0,
  boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
  backgroundColor: '#2D4C2A',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    maxWidth: 482
  },
  '> a': {
    display: 'block',
    width: '100%',
    maxWidth: 180,
    [theme.breakpoints.down('md')]: {
      maxWidth: 'initial'
    },
    button: {
      width: '100%'
    }
  },
}));

export const AutocompleteContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: 482,
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
  }
}));

export const DateBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'dateIsSelected',
})(({ theme, dateIsSelected }) => ({
  width: '100%',
  maxWidth: 482,
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

export const SearchButton = styled(Button)(({ theme }) => ({
  width: 208,
  height: 40,
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 500,
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}));
