import { Link, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import { Wrapper, SocialLinks } from './styles';

export function AuthFooter() {
  return (
    <Wrapper component="footer">
      <Typography>@2022 Casinha</Typography>
      <SocialLinks>
        <Link href="//facebook.com" target="_blank">
          <FacebookIcon />
        </Link>
        <Link href="//linkedin.com" target="_blank">
          <LinkedInIcon />
        </Link>
        <Link href="//twitter.com" target="_blank">
          <TwitterIcon />
        </Link>
        <Link href="//instagram.com" target="_blank">
          <InstagramIcon />
        </Link>
      </SocialLinks>
    </Wrapper>
  );
}
