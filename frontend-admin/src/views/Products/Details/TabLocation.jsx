import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material';

export function TabLocation({ cities, formikProps }) {
  const { values, handleChange } = formikProps;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Localização"
            titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="address"
                  value={values.address}
                  label="Endereço"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  label="Cidade"
                  name="city[id]"
                  fullWidth
                  value={values.city.id}
                  onChange={handleChange}
                >
                  {cities.map(city => (
                    <MenuItem key={city.id} value={city.id}>
                      {city.city}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="latitude"
                  value={values.latitude}
                  label="Latitude"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="longitude"
                  value={values.longitude}
                  label="Longitude"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
