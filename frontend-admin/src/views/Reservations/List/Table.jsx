import { IconButton, Box, Avatar, Typography, SvgIcon } from '@mui/material';
import { Edit as EditIcon, Trash as TrashIcon } from 'react-feather';
import { Table } from '@/components/Table';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight as ArrowRightIcon } from 'react-feather';
import { format } from 'date-fns';

export function ReservationsTable({ reservations }) {
  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/cidades/${id}/editar`);
  }

  function handleDelete(id) {
    alert('TODO');
  }

  function getBody() {
    return reservations.map(reservation => {
      const { id, startDate, endDate, product, user } = reservation;
      return {
        avatar: <Avatar sx={{ borderRadius: 1 }} src={product.images[0].url} />,
        product: product.title,
        customer: (
          <>
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div>{user.username}</div>
          </>
        ),
        dates: `${format(new Date(startDate), 'dd/MM/yyyy')} - ${format(
          new Date(endDate),
          'dd/MM/yyyy'
        )}`,
        actions: (
          <IconButton onClick={() => navigate(`/reservas/${id}`)}>
            <ArrowRightIcon />
          </IconButton>
        ),
      };
    });
  }

  function getHeader() {
    return ['', 'Casinha', 'Cliente', 'Período', ''];
  }

  const columns = {
    header: getHeader(),
    body: getBody(),
  };

  return (
    <Box>
      <Table
        columns={columns}
        data={reservations}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Box>
  );
}
