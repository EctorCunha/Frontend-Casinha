import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material';

export function TabCharacteristics({ formikProps }) {
  const { values, handleChange } = formikProps;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Informações"
            titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  type="number"
                  label="Área"
                  fullWidth
                  name="characteristics[area]"
                  value={values.characteristics.area}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  type="number"
                  label="Número de Convidados"
                  fullWidth
                  name="characteristics[numberOfGuests]"
                  value={values.characteristics.numberOfGuests}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  type="number"
                  label="Número de Quartos"
                  fullWidth
                  name="characteristics[numberOfBedrooms]"
                  value={values.characteristics.numberOfBedrooms}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  type="number"
                  label="Número de Camas"
                  fullWidth
                  name="characteristics[numberOfBeds]"
                  value={values.characteristics.numberOfBeds}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  type="number"
                  label="Número de Banheiros"
                  fullWidth
                  name="characteristics[numberOfBathrooms]"
                  value={values.characteristics.numberOfBathrooms}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Horários"
            titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  type="time"
                  label="Horário de Check-in"
                  fullWidth
                  name="characteristics[checkIn]"
                  value={values.characteristics.checkIn}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  type="time"
                  label="Horário de Check-out"
                  fullWidth
                  name="characteristics[checkOut]"
                  value={values.characteristics.checkOut}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Tem / Não tem"
            titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  select
                  label="Wifi"
                  fullWidth
                  name="characteristics[wifi]"
                  value={values.characteristics.wifi}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Sim</MenuItem>
                  <MenuItem value={false}>Não</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  select
                  label="Ar Condicionado"
                  fullWidth
                  name="characteristics[airConditioning]"
                  value={values.characteristics.airConditioning}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Sim</MenuItem>
                  <MenuItem value={false}>Não</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  select
                  label="Cozinha"
                  fullWidth
                  name="characteristics[kitchen]"
                  value={values.characteristics.kitchen}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Sim</MenuItem>
                  <MenuItem value={false}>Não</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  select
                  label="Estacionamento"
                  fullWidth
                  name="characteristics[parking]"
                  value={values.characteristics.parking}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Sim</MenuItem>
                  <MenuItem value={false}>Não</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Permissões"
            titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  select
                  label="Permitido Animais"
                  fullWidth
                  name="characteristics[petsAllowed]"
                  value={values.characteristics.petsAllowed}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Sim</MenuItem>
                  <MenuItem value={false}>Não</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  select
                  label="Permitido Fumar"
                  fullWidth
                  name="characteristics[smokingAllowed]"
                  value={values.characteristics.smokingAllowed}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Sim</MenuItem>
                  <MenuItem value={false}>Não</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
