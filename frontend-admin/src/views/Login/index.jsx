import { Form, Formik } from 'formik';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Grid,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { Logo } from '@/components/Logo';
import * as Yup from 'yup';
import { useInterface } from '@/hooks/useInterface';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#2D4C2A',
  svg: {
    marginBottom: 48,
  },
});

const LoginBox = styled(Card)({
  padding: 32,
  margin: '0 auto',
  maxWidth: 400,
  h2: {
    fontSize: 32,
    fontWeight: 500,
  },
  '> p': {
    color: '#777',
    marginBottom: 32,
  },
  '.MuiFormHelperText-root': {
    color: '#f44336',
  },
});

export default function Login() {
  const { login, user } = useAuth();
  const { addGlobalMessage, addGlobalLoading, removeGlobalLoading } = useInterface();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  async function handleSubmit(values) {
    try {
      addGlobalLoading();
      await login(values.email, values.password);
    } catch {
      addGlobalMessage('Erro ao fazer login', 'error');
    } finally {
      removeGlobalLoading();
    }
  }

  return (
    <Wrapper>
      <Logo />
      <LoginBox>
        <Typography variant="h2">Entrar</Typography>
        <Typography>Faça login na área administrativa</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            submitForm,
            errors,
            touched,
          }) => (
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  name="email"
                  value={values.email}
                  error={touched.email && errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Senha"
                  name="password"
                  value={values.password}
                  error={touched.password && errors.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={submitForm}
                >
                  Entrar
                </Button>
              </Grid>
            </Grid>
          )}
        </Formik>
      </LoginBox>
    </Wrapper>
  );
}
