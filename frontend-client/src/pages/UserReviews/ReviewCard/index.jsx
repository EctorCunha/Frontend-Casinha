import {
  Typography,
  Button,
  Box,
  DialogContent,
  TextField,
  Grid,
  Rating,
  IconButton,
} from '@mui/material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Close } from '@mui/icons-material';
import { Wrapper, Details, ReviewDialog, DetailsDialog } from './styles';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import { Formik } from 'formik';
import * as Yup from 'yup';

export function ReviewCard({ reservation }) {
  const { product } = reservation;
  const startDate = format(new Date(reservation.startDate), 'dd/MM/yyyy');
  const endDate = format(new Date(reservation.endDate), 'dd/MM/yyyy');
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const reviewsApi = new CasinhaApi('/reviews');
  const [reviewDialogIsOpen, setReviewDialogIsOpen] = useState(false);
  const [reviewDetailsDialogIsOpen, setReviewDetailsDialogIsOpen] =
    useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const s3BucketUrl = '//g2-casinha-files.s3.us-east-2.amazonaws.com';
  const reservationHasReview = Boolean(reservation.review);

  function handleCloseReviewDialog() {
    setReviewDialogIsOpen(false);
  }

  function handleOpenReviewDialog() {
    setReviewDialogIsOpen(true);
  }

  function handleCloseReviewDetailsDialog() {
    setReviewDetailsDialogIsOpen(false);
  }

  function handleOpenReviewDetailsDialog() {
    setReviewDetailsDialogIsOpen(true);
  }

  function validateScore(score) {
    if (!Boolean(score)) {
      setError('Campo obrigatório');
      return false;
    }
    setError('');
    return true;
  }

  async function handleSubmit(values) {
    if (!validateScore(values.score)) {
      return;
    }

    const data = {
      title: values.title,
      text: values.text,
      score: values.score,
      reservation: {
        id: reservation.id,
      },
    };

    try {
      addGlobalLoading();
      await reviewsApi.post(data);
      addGlobalMessage('A sua avaliação foi enviada!');
      handleCloseReviewDialog();
      navigate('/');
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  const initialValues = {
    title: '',
    text: '',
    score: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Campo obrigatório'),
    text: Yup.string().required('Campo obrigatório'),
  });

  return (
    <>
      <Wrapper elevation={0}>
        <Box elevation={0}>
          <img src={product.images[0].url} />
        </Box>
        <Details elevation={0}>
          <Typography variant="h3">{product.title}</Typography>
          <Typography>
            Data da reserva:{' '}
            <span>
              {startDate} - {endDate}
            </span>
          </Typography>
        </Details>
        {(() => {
          if (reservationHasReview) {
            return (
              <Button
                size="large"
                variant="outlined"
                onClick={handleOpenReviewDetailsDialog}
              >
                Ver Avaliação
              </Button>
            )
          }

          if (!reservationHasReview && reservation.status == 'cancelada') {
            return (
              <Button size="large" variant="disabled">
                Reserva cancelada
              </Button>

            )
          } else if (!reservationHasReview && new Date(reservation.endDate) > new Date()) {
            return (
              <Button size="large" variant="disabled">
                Reserva não finalizada
              </Button>
            )
          } else if (!reservationHasReview && new Date(reservation.endDate) < new Date()) {
            return (
              <Button
                size="large"
                variant="outlined"
                onClick={handleOpenReviewDialog}
              >
                Avaliar Reserva
              </Button>
            )
          }

          return null;
        })()}

      </Wrapper>
      <ReviewDialog
        fullWidth
        maxWidth="md"
        open={reviewDialogIsOpen}
        onClose={handleCloseReviewDialog}
      >
        <DialogContent>
          <IconButton
            onClick={handleCloseReviewDialog}
            sx={{ position: 'absolute', right: 4, top: 4 }}
          >
            <Close />
          </IconButton>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <img src={product.images[0].url} />
            <Typography variant="h3">{product.title}</Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {formikProps => {
              const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                setFieldValue,
                submitForm,
              } = formikProps;
              return (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Dê um título a sua avaliação"
                      name="title"
                      fullWidth
                      value={values.title}
                      onChange={handleChange}
                      error={touched.title && errors.title}
                      helperText={touched.title && errors.title}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      rows={4}
                      label="O que achou da casinha?"
                      fullWidth
                      name="text"
                      value={values.text}
                      onChange={handleChange}
                      error={touched.text && errors.text}
                      helperText={touched.text && errors.text}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography mb={1}>
                      Selecione as estrelas, sendo 5 estrelas pra excelente e 0
                      para regular
                    </Typography>
                    <Rating
                      size="large"
                      value={values.score}
                      onChange={(_, newValue) =>
                        setFieldValue('score', newValue)
                      }
                    />
                    {error && (
                      <Typography sx={{ color: '#d32f2f', fontSize: 12 }}>
                        {error}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick={submitForm}>
                      Avaliar Reserva
                    </Button>
                  </Grid>
                </Grid>
              );
            }}
          </Formik>
        </DialogContent>
      </ReviewDialog>
      <DetailsDialog
        fullWidth
        maxWidth="md"
        open={reviewDetailsDialogIsOpen}
        onClose={handleCloseReviewDetailsDialog}
      >
        <DialogContent>
          <IconButton
            onClick={handleCloseReviewDetailsDialog}
            sx={{ position: 'absolute', right: 4, top: 4 }}
          >
            <Close />
          </IconButton>
          <Rating value={reservation.review?.score} />
          <Typography variant="h2">{reservation.product?.title}</Typography>
          <Typography variant="caption">Titulo</Typography>
          <Typography>{reservation.review?.title}</Typography>
          <Typography variant="caption">Texto</Typography>
          <Typography>{reservation.review?.text}</Typography>
        </DialogContent>
      </DetailsDialog>
    </>
  );
}
