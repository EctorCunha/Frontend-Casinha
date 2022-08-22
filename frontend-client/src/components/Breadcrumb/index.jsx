import { Link } from 'react-router-dom';
import { Breadcrumbs, Container, Grid } from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

import { Wrapper } from './styles';

export function Breadcrumb({ items }) {
  return (
    <Wrapper>
      <Container maxWidth={false}>
        <Grid item>
          <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb">
            {items.map((item, index) => {
              const isLastItem = index === items.length - 1;
              const className = isLastItem ? 'last-item' : '';
              return (
                <Link key={index} to={item.link} className={className}>
                  {item.text}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Grid>
      </Container>
    </Wrapper>
  );
}
