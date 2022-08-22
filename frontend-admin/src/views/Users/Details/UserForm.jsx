import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Divider,
  CardHeader,
  MenuItem,
} from '@mui/material';

export function UserForm({ formikProps, roles }) {
  const { handleChange, handleSubmit, values } = formikProps;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Box mt={3} mb={3}>
            <Card>
              <CardHeader
                title="Informações do usuário"
                titleTypographyProps={{
                  fontSize: 16,
                  fontWeight: 700,
                }}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Nome"
                      name="firstName"
                      fullWidth
                      value={values.firstName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Sobrenome"
                      name="lastName"
                      fullWidth
                      value={values.lastName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Email"
                      name="username"
                      fullWidth
                      value={values.username}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      type="password"
                      label="Senha"
                      name="password"
                      fullWidth
                      value={values.password}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      label="Role"
                      name="role[id]"
                      fullWidth
                      value={values.role?.id}
                      onChange={handleChange}
                    >
                      {roles.map(role => (
                        <MenuItem value={role.id}>{role.title}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
          <Divider />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit">
              Salvar
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
}
