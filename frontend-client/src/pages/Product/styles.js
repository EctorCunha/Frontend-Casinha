import { Box, Card, Dialog, styled, Typography } from "@mui/material";

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

export const Location = styled(Box)({
  backgroundColor: '#eeeef1',
  padding: '16px 18px',
  color: '#383b58',
  display: 'flex',
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 700,
  paddingBottom: 8,
  marginBottom: 16,
  width: 'fit-content',
  borderBottom: '2px solid #b5aea8',
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
  },
}));

export const Gallery = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  gridTemplateRows: '2fr 1fr 1fr',
  gap: '10px',
  position: 'relative',
  marginTop: 32,
  marginBottom: 64,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '100%',
    gridTemplateRows: '1fr',
  },
  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s all ease-in-out',
    '&:hover': {
      filter: 'grayscale(100%)',
    },
    '&:nth-of-type(1)': { gridRow: '1 / -1', gridColumn: '1 / 2' },
    '&:nth-of-type(2)': { gridRow: '1 / 2', gridColumn: '2 / 3' },
    '&:nth-of-type(3)': { gridRow: '1 / 2', gridColumn: '3 / 4' },
    '&:nth-of-type(4)': { gridRow: '2 / -1', gridColumn: '2 / 3' },
    '&:nth-of-type(5)': { gridRow: '2 / -1', gridColumn: '3 / 4' },
  },
  '& button': {
    position: 'absolute',
    right: 32,
    bottom: 16,
    color: '#ffffff',
    textDecoration: 'underline',
    fontWeight: 700,
  },
}));

export const GalleryDialog = styled(Dialog)({
  '& .MuiDialogContent-root': {
    padding: 0,
    position: 'relative',
    button: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 10,
      background: '#ffffff',
      svg: {
        color: '#2D4C2A',
      },
    },
  },
  img: {
    display: 'block',
    width: '100%',
    height: '70vh',
    objectFit: 'cover',
  },
  '.swiper-button-prev, .swiper-button-next': {
    color: '#2D4C2A',
  },
});

export const GalleryDialogThumbs = styled(Box)({
  padding: 16,
  img: {
    display: 'block',
    width: '100%',
    height: 90,
    objectFit: 'cover',
    cursor: 'pointer',
  },
  p: {
    color: '#383B58',
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 12,
  },
  '.swiper-slide': {
    overflow: 'hidden',
    borderRadius: 8,
    opacity: 0.5,
    border: '2px solid transparent',
  },
  '.swiper-slide-thumb-active': {
    opacity: 1,
    borderColor: '#2D4C2A',
  },
});

export const Description = styled(Box)({
  marginBottom: 48,
  p: {
    color: '#000',
    '& + p': {
      marginTop: 16,
    },
  },
});

export const Characteristics = styled(Box)({
  marginBottom: 64,
  svg: {
    color: '#2D4C2A',
  },
  span: {
    fontSize: 16,
  },
});

export const Reservation = styled(Box)(({ theme }) => ({
  paddingTop: 48,
  paddingBottom: 48,
  display: 'flex',
  flexDirection: 'column',
  background: '#EEEEF1',
  '.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,  .react-datepicker__day--keyboard-selected':
  {
    backgroundColor: '#FFFFFF !important',
  },
  '.react-datepicker__header': {
    backgroundColor: '#2D4C2A',
    borderRadius: 0,
  },
  '.react-datepicker__current-month': {
    padding: 16,
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
      color: '#5B8B1D',
      fontWeight: 700,
      cursor: 'default',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      [theme.breakpoints.down('lg')]: {
        width: 32,
        height: 32,
        lineHeight: '32px',
      },
    },
    '.react-datepicker__day--disabled': {
      color: '#cccccc',
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
  },
}));

export const StartReservation = styled(Card)({
  padding: 16,
  h2: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 16,
  },

  h3: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 16,
  },
  textAlign: 'center',
});

export const Map = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 48,
  paddingBottom: 40,
});


export const Reviews = styled(Box)({
  paddingTop: 48,
  paddingBottom: 40,
});

export const ReviewsItem = styled(Box)({
  marginBottom: 15,
  backgroundColor: '#EEEEF1',
  padding: 15,
  borderRadius: 5,


});