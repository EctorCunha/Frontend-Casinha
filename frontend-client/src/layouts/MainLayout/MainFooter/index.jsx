import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Link, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  EmailOutlined as EmailIcon,
} from '@mui/icons-material';
import sslImage from '@/assets/images/ssl.avif';
import {
  Wrapper,
  SocialLinks,
  HouseUp,
  ContainerHouse,
  Balloon,
} from './styles';

export function MainFooter() {
  return (
    <Wrapper component="footer">
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12} md={2.4}>
            <Typography variant="h3">Institucional</Typography>
            <Grid container>
              <Grid item xs={12}>
                <RouterLink to="/">Sobre Nós</RouterLink>
              </Grid>
              <Grid item xs={12}>
                <RouterLink to="/">Termos e Condições</RouterLink>
              </Grid>
              <Grid item xs={12}>
                <RouterLink to="/">Política de Privacidade</RouterLink>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={2.4}>
            <Typography variant="h3">Segurança</Typography>
            <img src={sslImage} alt="" />
          </Grid>

          <Grid item xs={12} md={2.4}>
            <Typography variant="h3">Redes Sociais</Typography>
            <SocialLinks>
              <Link href="//facebook.com" target="_blank">
                <FacebookIcon alt="Icone do facebook" />
              </Link>
              <Link href="//linkedin.com" target="_blank">
                <LinkedInIcon alt="Icone do Linkedin" />
              </Link>
              <Link href="//twitter.com" target="_blank">
                <TwitterIcon alt="Icone do Twitter" />
              </Link>
              <Link href="//instagram.com" target="_blank">
                <InstagramIcon alt="Icone do Instagram" />
              </Link>
            </SocialLinks>
          </Grid>

          <Grid item xs={12} md={2.4}>
            <Typography variant="h3">Suporte</Typography>
            <Grid container>
              <Grid item xs={12}>
                <RouterLink to="/faqs">FAQs</RouterLink>
              </Grid>
              <Grid item xs={12}>
                <RouterLink to="/">
                  <WhatsAppIcon />
                  (53) 97924-4419
                </RouterLink>
              </Grid>
              <Grid item xs={12}>
                <RouterLink to="/">
                  <EmailIcon />
                  suporte@ctdcasinha.com
                </RouterLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ContainerHouse>
              <HouseUp className="house" />
              <Balloon className="ballon" />
            </ContainerHouse>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
