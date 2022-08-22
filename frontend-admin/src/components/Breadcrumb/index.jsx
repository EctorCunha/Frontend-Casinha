import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

export function Breadcrumb({
  className,
  textLink,
  textTypography,
  textBreadcrumb,
  linkToBreadcrumb,
}) {
  return (
    <Grid item>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          variant="body1"
          color="inherit"
          to="/"
          component={RouterLink}
          sx={{ textDecoration: 'none' }}
        >
          {textLink}
        </Link>
        <Link
          variant="body1"
          color="inherit"
          to={linkToBreadcrumb !== undefined ? linkToBreadcrumb : ''}
          component={RouterLink}
          sx={{ textDecoration: 'none' }}
        >
          {textBreadcrumb}
        </Link>
      </Breadcrumbs>
      <Grid item>
        <Typography variant="h3" color="textPrimary" fontSize={24} fontWeight={700}>
          {textTypography}
        </Typography>
      </Grid>
    </Grid>
  );
}
