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

export function CityForm({ formikProps }) {
  const { handleChange, handleSubmit, values } = formikProps;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Box mt={3} mb={3}>
            <Card>
              <CardHeader
                title="Informações da cidade"
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
                      name="city"
                      fullWidth
                      value={values.city}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Estado"
                      name="state"
                      fullWidth
                      value={values.state}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="País"
                      name="country"
                      fullWidth
                      value={values.country}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Código da Bandeira"
                      name="flagCode"
                      fullWidth
                      value={values.flagCode}
                      onChange={handleChange}
                    />
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
