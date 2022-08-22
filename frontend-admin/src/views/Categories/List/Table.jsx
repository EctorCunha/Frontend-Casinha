import { IconButton, Box, Avatar } from '@mui/material';
import { Edit as EditIcon, Trash as TrashIcon } from 'react-feather';
import { Table } from '@/components/Table';
import { useNavigate } from 'react-router-dom';

export function CategoriesTable({ categories }) {
  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/categorias/${id}/editar`);
  }

  function handleDelete(id) {
    alert('TODO');
  }

  function getBody() {
    return categories.map(category => {
      const { id, title, description, image } = category;
      return {
        image: <Avatar sx={{ borderRadius: 1 }} src={image}></Avatar>,
        title,
        description,
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
    return ['', 'Nome', 'Descrição', ''];
  }

  const columns = {
    header: getHeader(),
    body: getBody(),
  };

  return (
    <Box>
      <Table
        columns={columns}
        data={categories}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Box>
  );
}
