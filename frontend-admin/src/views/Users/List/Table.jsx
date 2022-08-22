import { IconButton, Box, Avatar } from '@mui/material';
import { Edit as EditIcon, Trash as TrashIcon } from 'react-feather';
import { Table } from '@/components/Table';
import { useNavigate } from 'react-router-dom';

export function UsersTable({ customers }) {
  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/usuarios/${id}/editar`);
  }

  function handleDelete(id) {
    alert('TODO');
  }

  function getBody() {
    return customers.map(customer => {
      const { id, firstName, lastName, reservations, username, role } =
        customer;
      return {
        avatar: (
          <Avatar>
            {firstName?.[0]}
            {lastName?.[0]}
          </Avatar>
        ),
        name: firstName + ' ' + lastName,
        email: username,
        role: role.id === 1 ? 'Administrador' : 'Cliente',
        reservations: reservations.length,
        actions: (
          <>
            <IconButton onClick={() => handleDelete(id)}>
              <TrashIcon />
            </IconButton>
            <IconButton onClick={() => handleEdit(id)}>
              <EditIcon />
            </IconButton>
          </>
        ),
      };
    });
  }

  function getHeader() {
    return ['', 'Nome', 'E-mail', 'Role', 'Reservas', ''];
  }

  const columns = {
    header: getHeader(),
    body: getBody(),
  };

  return (
    <Box>
      <Table
        columns={columns}
        data={customers}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Box>
  );
}
