import { Formik } from 'formik';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import { Page } from '@/components/Page';
import { registerSchema } from './registerSchema';
import airBalloon from '@/assets/images/airballoon.avif';
import {
  Container,
  ContainerForm,
  ContainerImage,
  ContainerRegister,
  RegisterForm,
} from './styles';

export function Register() {
  const usersApi = new CasinhaApi('/users');
  const navigate = useNavigate();
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();

  async function handleSubmit(values) {
    addGlobalLoading();
    usersApi
      .post({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.email,
        password: values.password,
        role: {
          id: 2,
        },
      })
      .then(() => {
        addGlobalMessage('Usuário criado com sucesso.', 'success');
        navigate('/login');
      })
      .catch(() => {
        addGlobalMessage(
          'Erro ao criar usuário, tente novamente mais tarde.',
          'error'
        );
      })
      .finally(() => {
        removeGlobalLoading();
      });
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
  };

  return (
    <Page title="Criar Conta">
      <ContainerRegister
        noValidate
        autoComplete="off"
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <img className="imageBalloon" src={airBalloon} />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
            submitForm,
          }) => (
            <RegisterForm
              onSubmit={handleSubmit}
              component={motion.div}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              <Container>
                <ContainerImage />
                <ContainerForm>
                  <Typography variant="h2">Cadastre-se</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="firstName"
                        name="firstName"
                        type="text"
                        label="Nome"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        error={touched.firstName && errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="lastName"
                        name="lastName"
                        type="text"
                        label="Sobrenome"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        error={touched.lastName && errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="emailConfirmation"
                        name="emailConfirmation"
                        type="email"
                        label="Confirmar Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        error={
                          touched.emailConfirmation && errors.emailConfirmation
                        }
                        helperText={
                          touched.emailConfirmation && errors.emailConfirmation
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="password"
                        label="Confirmar Senha"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        error={
                          touched.passwordConfirmation &&
                          errors.passwordConfirmation
                        }
                        helperText={
                          touched.passwordConfirmation &&
                          errors.passwordConfirmation
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        onClick={submitForm}
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth
                      >
                        Criar conta
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography>
                    Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
                  </Typography>
                </ContainerForm>
              </Container>
            </RegisterForm>
          )}
        </Formik>
      </ContainerRegister>
    </Page>
  );
}
