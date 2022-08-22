import { IconButton, Avatar, Box } from '@mui/material';
import {
  Edit as EditIcon,
  Trash as TrashIcon,
  Box as BoxIcon,
} from 'react-feather';
import { Table } from '@/components/Table';
import { formatPrice } from '@/utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function ProductsTable({ products, onDelete }) {
  const navigate = useNavigate();
  const s3BucketUrl = '//g2-casinha-files.s3.us-east-2.amazonaws.com';
  const [stateDialog, setStateDialog] = useState(false);

  function getBody() {
    let bodyProducts = [];

    products.map(product => {
      const { id, title, categories, images, priceNight, reservations } =
        product;

      bodyProducts.push({
        images: (
          <Avatar
            sx={{ borderRadius: 1 }}
            src={images.length > 0 ? `${images[0].url}` : `${s3BucketUrl}`}
          >
            <BoxIcon />
          </Avatar>
        ),
        title,
        category: categories[0].title,
        priceNight: formatPrice(priceNight),
        reservations: reservations.length,
        actions: (
          <>
            <IconButton onClick={() => onDelete(id)}>
              <TrashIcon />
            </IconButton>
            <IconButton onClick={() => navigate(`/casinhas/${id}/editar`)}>
              <EditIcon />
            </IconButton>
          </>
        ),
      });
    });

    return bodyProducts;
  }

  function getHeader() {
    return ['', 'Título', 'Categoria', 'Preço por Noite', 'Reservas', ''];
  }

  const columns = {
    header: getHeader(),
    body: getBody(),
  };

  return (
    <Box sx={{ minWidth: 700 }}>
      <Table columns={columns} data={products} />
    </Box>
  );
}
