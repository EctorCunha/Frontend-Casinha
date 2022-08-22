import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { Formik } from 'formik';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useInterface } from '@/hooks/useInterface';
import { Page } from '@/components/Page';
import bgLogin from '@/assets/images/bg_login.avif';
import { loginSchema } from './loginSchema';
import {
  Clouds,
  Container,
  ContainerBackground,
  ContainerForm,
  ContainerImage,
  ContainerLogin,
  LoginForm,
  Star,
  Twinkling,
} from './styles';

export function Login() {
  const { login, user } = useAuth();
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const navigate = useNavigate();
  const location = useLocation();
  const fromProductPageUnauthenticated =
    location.state?.from.includes('products');

  useEffect(() => {
    if (user) {
      navigate(location.state ? location.state.from : '/');
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

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Page title="Login">
      <ContainerLogin
        noValidate
        autoComplete="off"
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <ContainerBackground>
          <img className="imagebg" src={bgLogin} />
          <img
            className="imagemoon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          />
          <Star />
          <Twinkling />
          <Clouds />
        </ContainerBackground>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, errors, handleBlur, touched }) => (
            <LoginForm
              onSubmit={handleSubmit}
              component={motion.div}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              <Container>
                <ContainerImage />
                <ContainerForm>
                  <Typography variant="h2">Iniciar sessão</Typography>
                  {fromProductPageUnauthenticated && (
                    <Typography sx={{ color: 'red' }}>
                      É necessário fazer login para acessar as reservas
                    </Typography>
                  )}
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        error={touched.email && errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Senha"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        error={touched.password && errors.password}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth
                      >
                        Entrar
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography>
                    Ainda não tem conta? <Link to="/register">Registre-se</Link>
                  </Typography>
                </ContainerForm>
              </Container>
            </LoginForm>
          )}
        </Formik>
      </ContainerLogin>
    </Page>
  );
}
