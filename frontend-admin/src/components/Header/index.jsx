import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, styled, SvgIcon } from '@mui/material';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
import { Breadcrumb } from '@/components/Breadcrumb';

const Wrapper = styled(Grid)({
  marginBottom: 24,
  '.action': {
    marginBottom: 8,
    '& + &': {
      marginLeft: 8,
    },
  },
  '.actionIcon': {
    marginRight: 8,
  },
});

export function Header({
  className,
  textTypography,
  linkButtonTo,
  textButton,
  textLink,
  buttonNew,
  textBreadcrumb,
  linkToBreadcrumb,
}) {
  return (
    <Wrapper
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
    >
      <Breadcrumb
        textLink={textLink}
        textTypography={textTypography}
        textBreadcrumb={textBreadcrumb}
        linkToBreadcrumb={linkToBreadcrumb}
      />
      {buttonNew && (
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            className="action"
            component={RouterLink}
            to={linkButtonTo}
          >
            <SvgIcon fontSize="small" className="actionIcon">
              <PlusCircleIcon />
            </SvgIcon>
            {textButton}
          </Button>
        </Grid>
      )}
    </Wrapper>
  );
}
