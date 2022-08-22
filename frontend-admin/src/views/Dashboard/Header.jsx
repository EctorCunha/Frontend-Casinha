import { Typography, Grid} from '@mui/material';
import { useAuth } from '@/hooks/useAuth';

export function Header({ className, ...rest }) {
  const { user } = useAuth();

  return (
    <Grid container justify="space-between" spacing={3}>
      <Grid item lg={6} xs={12}>
        <Typography
          component="h2"
          gutterBottom
          variant="overline"
          color="textPrimary"
        >
          Painel de Controle
        </Typography>
        <Typography
          component="h1"
          gutterBottom
          variant="h3"
          color="textPrimary"
        >
          Olá, {user.firstName}
        </Typography>
      </Grid>
    </Grid>
  );
}
