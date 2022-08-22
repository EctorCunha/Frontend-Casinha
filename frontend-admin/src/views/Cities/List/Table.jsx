import { IconButton, Box, Avatar } from '@mui/material';
import { Edit as EditIcon, Trash as TrashIcon } from 'react-feather';
import { Table } from '@/components/Table';
import { useNavigate } from 'react-router-dom';

export function CitiesTable({ cities }) {
  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/cidades/${id}/editar`);
  }

  function handleDelete(id) {
    alert('TODO');
  }

  function getBody() {
    return cities.map(city => {
      const { id, city: name, state, country, flagCode } = city;
      return {
        avatar: (
          <img
            style={{ width: 20, height: 14 }}
            src={`//flagcdn.com/w20/${flagCode.toLowerCase()}.png`}
          />
        ),
        name,
        state,
        country,
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
    return ['', 'Nome', 'Estado', 'País', ''];
  }

  const columns = {
    header: getHeader(),
    body: getBody(),
  };

  return (
    <Box>
      <Table
        columns={columns}
        data={cities}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Box>
  );
}
