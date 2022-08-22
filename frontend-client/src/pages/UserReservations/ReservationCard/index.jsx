import {
  CardContent,
  CardMedia,
  Typography,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  Cancel as CancelIcon,
  Repeat as RepeatIcon,
  RateReview as RateReviewIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { Wrapper, Details, ContainerMenu, DetailsItem } from './styles';
import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/CasinhaApi';

export function ReservationCard({ reservation }) {
  const navigate = useNavigate();
  const { product } = reservation;
  const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
    useInterface();
  const startDate = format(new Date(reservation.startDate), 'dd/MM/yyyy');
  const endDate = format(new Date(reservation.endDate), 'dd/MM/yyyy');
  const startDateTime = new Date(reservation.startDate);
  const endDateTime = new Date(reservation.endDate);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const reservationsApi = new CasinhaApi('/reservations/cancel');

  const calculateDays = Math.ceil(
    (endDateTime - startDateTime) / (100000 * 36 * 24)
  );

  async function handleCancelation(id) {
    try {
      addGlobalLoading();
      await reservationsApi.get(id);
      addGlobalMessage('Reserva cancelada');
      location.reload();
    } catch {
      addGlobalMessage('Erro ao cancelar a reserva', 'error');
    } finally {
      removeGlobalLoading();
    }
  }

  return (
    <Wrapper>
      <ContainerMenu>
        <Button onClick={e => setMenuAnchorEl(e.currentTarget)}>
          {' '}
          <MoreVertIcon />
        </Button>
        <Menu
          open={Boolean(menuAnchorEl)}
          anchorEl={menuAnchorEl}
          onClose={() => setMenuAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              ml: -1,
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 10,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          <MenuItem
            onClick={() => navigate(`/products/${product.id}/reservation`)}
          >
            <RepeatIcon sx={{ marginRight: 1 }} />
            Repetir
          </MenuItem>
          {(() => {
            if (
              reservation.status !== 'cancelada' &&
              new Date(reservation.endDate) > new Date()
            ) {
              return (
                <MenuItem onClick={() => handleCancelation(reservation.id)}>
                  <CancelIcon sx={{ marginRight: 1 }} /> Cancelar
                </MenuItem>
              );
            }
            return null;
          })()}
          {new Date(reservation.endDate) < new Date() && (
            <MenuItem onClick={() => navigate(`/reviews`)}>
              <RateReviewIcon sx={{ marginRight: 1 }} /> Review
            </MenuItem>
          )}
        </Menu>
      </ContainerMenu>
      <CardMedia
        component="img"
        src={product.images[0].url}
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <CardContent>
        <Typography variant="h3">{product.title}</Typography>
        <Details>
          <DetailsItem>
            <Typography>
              <strong>Nº da reserva</strong>
              <span>{reservation.id}</span>
            </Typography>
            <Typography>
              <strong>Status</strong>
              {reservation.status ? (
                <span>{reservation.status}</span>
              ) : (
                <span> confirmada </span>
              )}
            </Typography>
            <Typography>
              <strong>Check-in</strong>
              <span>{startDate}</span>
            </Typography>
            <Typography>
              <strong>Check-out</strong>
              <span>{endDate}</span>
            </Typography>
            <Typography>
              <strong>Horário de chegada</strong>
              <span>{reservation.arrivalTime}</span>
            </Typography>
            <Typography>
              <strong>Valor total</strong>
              <span>
                {' '}
                {calculateDays} diária(s) por R${' '}
                {(product.priceNight * calculateDays).toLocaleString('pt-BR')}
              </span>
            </Typography>
          </DetailsItem>
          <Typography>
            <strong>Endereço</strong>
            <span>{product.address}</span>
          </Typography>
        </Details>
      </CardContent>
    </Wrapper>
  );
}
