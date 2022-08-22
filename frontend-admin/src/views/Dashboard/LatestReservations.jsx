import { Button, Typography } from '@mui/material';
import { Table } from '@/components/Table';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

export function LatestReservations({ reservations }) {
  const navigate = useNavigate();

  const getHeader = () => {
    return ['Data de Criação', 'Casinha', 'Período', 'Status', ''];
  };

  const getBody = () => {
    return reservations.map(reservation => {
      return {
        date: (
          <>
            <Typography>01/01/0101</Typography>
          </>
        ),
        product: <Typography>{reservation.product.title}</Typography>,
        dates: (
          <>
            <Typography>
              {format(reservation.startDate, 'dd/MM/yyyy')} -{' '}
              {format(reservation.endDate, 'dd/MM/yyyy')}
            </Typography>
          </>
        ),
        status: <Typography>Confirmada</Typography>,
        actions: (
          <Button
            color="primary"
            onClick={() => navigate`/reservas/${reservation.id}`}
            size="small"
            variant="outlined"
          >
            Ver
          </Button>
        ),
      };
    });
  };

  const columns = {
    header: getHeader(),
    body: getBody(),
  };

  return (
    <Table
      columns={columns}
      data={reservations}
      cardHeader="Últimas Reservas"
      cardActions
      cardActionsLinkTo="/reservas"
      isNewPagination
    />
  );
}
