import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Divider,
  CardHeader,
} from '@mui/material';

export function CategoryForm({ formikProps }) {
  const { handleChange, handleSubmit, values } = formikProps;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Box mt={3} mb={3}>
            <Card>
              <CardHeader
                title="Informações da categoria"
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
                      name="title"
                      fullWidth
                      value={values.title}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Imagem"
                      name="image"
                      fullWidth
                      value={values.image}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Descrição"
                      name="description"
                      fullWidth
                      value={values.description}
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
