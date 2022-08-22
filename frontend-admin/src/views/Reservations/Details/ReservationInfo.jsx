import {
  Card,
  Grid,
  Divider,
  CardHeader,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { format } from 'date-fns';

export function ReservationInfo({ reservation }) {
  return (
    <Grid container spacing={3}>
      <Grid item md={6} xl={6} xs={12}>
        <Card>
          <CardHeader title="Informações da Reserva" />
          <Divider />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>#{reservation.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Data de Check-in</TableCell>
                <TableCell>
                  {format(new Date(reservation.startDate), 'dd/MM/yyyy')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Data de Check-out</TableCell>
                <TableCell>
                  {format(new Date(reservation.startDate), 'dd/MM/yyyy')}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </Grid>

      <Grid item md={6} xl={6} xs={12}>
        <Card>
          <CardHeader title="Informações da Casinha" />
          <Divider />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>{reservation.product.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Localização</TableCell>
                <TableCell>
                  {reservation.product.city.city},{' '}
                  {reservation.product.city.state} -{' '}
                  {reservation.product.city.country}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </Grid>

      <Grid item md={6} xl={6} xs={12}>
        <Card>
          <CardHeader title="Informações do Cliente" />
          <Divider />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>
                  {reservation.user.firstName} {reservation.user.lastName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>E-mail</TableCell>
                <TableCell>{reservation.user.username}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </Grid>
  );
}
