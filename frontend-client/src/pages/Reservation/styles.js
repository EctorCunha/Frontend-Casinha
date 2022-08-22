import { Box, Card, styled, Typography } from "@mui/material";

export const Header = styled(Box)({
  backgroundColor: '#5B8B1D',
  padding: '16px 24px',
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  a: {
    width: 48,
    height: 48,
    color: '#ffffff',
  },
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 28,
  fontWeight: 700,
  color: '#2D4C2A',
  marginBottom: 16,
  marginTop: 32,
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
    textAlign: 'center',
  },
}));

export const UserData = styled(Card)({
  padding: 32,
});

export const ReservationDetails = styled(Card)({
  marginTop: 80,
  h3: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#5B8B1D',
  },
  h4: {
    fontSize: 24,
    fontWeight: 700,
    color: '#2D4C2A',
  },
  h5: {
    fontSize: 14,
    color: '#2D4C2A',
    fontWeight: 700,
  },
  'div div div span': {
    fontSize: 16,
    color: '#B5AEA8',
    fontWeight: 700,
  },
  button: {
    textTransform: 'none',
  },
  time: {
    color: '#2D4C2A',
    fontSize: 14,
    fontWeight: 700,
  },
  small: {
    color: '#2D4C2A',
    fontSize: 14,
    fontWeight: 700,
  },
});

export const DateSelection = styled(Box)(({ theme }) => ({
  border: '1px solid transparent',
  borderRadius: 4,
  '&.dateSelection--error': {
    borderColor: '#D32F2F',
    backgroundColor: 'rgb(211, 47, 47, 0.1)',
    padding: '8px 8px 0 8px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 8,
    },
  },
  '.react-datepicker__current-month': {
    padding: 16,
  },
  '.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,  .react-datepicker__day--keyboard-selected':
    {
      backgroundColor: '#5B8B1D !important',
      borderRadius: 2,
    },
  '.react-datepicker__header': {
    backgroundColor: '#2D4C2A',
    borderRadius: 0,
  },
  '.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header, .react-datepicker__day-name':
    {
      color: '#FFFFFF',
    },
  '.react-datepicker': {
    width: '100%',
    '.react-datepicker__month-container': {
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    '.react-datepicker__month': {
      paddingTop: 24,
      paddingBottom: 16,
    },
    '.react-datepicker__day': {
      width: 48,
      height: 48,
      lineHeight: '48px',
      [theme.breakpoints.down('lg')]: {
        width: 32,
        height: 32,
        lineHeight: '32px',
      },
    },
    '.react-datepicker__day-name': {
      width: 48,
      [theme.breakpoints.down('lg')]: {
        width: 32,
      },
    },
    '.react-datepicker__day--outside-month': {
      visibility: 'hidden',
      height: 'auto',
    },
    '.react-datepicker__day--in-range.react-datepicker__day--disabled': {
      backgroundColor: '#ffffff !important',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
    },
  },
}));

export const ArrivalTime = styled(Card)({
  padding: 32,
  h4: {
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    fontWeight: 500,
  },
  p: {
    marginBottom: 8,
    fontWeight: 500,
  },
});
