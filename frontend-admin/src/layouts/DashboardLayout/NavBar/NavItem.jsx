import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button, Collapse, ListItem, styled } from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

const Wrapper = styled(ListItem)({
  display: 'block',
  paddingTop: 0,
  paddingBottom: 0,
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  '.button': {
    color: '#333',
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  '.buttonLeaf': {
    color: '#777',
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: 400,
    '&.depth-0': {
      '& $title': {
        fontWeight: 500,
      },
    },
  },
  '.icon': {
    display: 'flex',
    alignItems: 'center',
    marginRight: 8,
  },
  '.title': {
    marginRight: 'auto',
  },
  '.active': {
    color: '#5B8B1D',
    fontWeight: 700,
  }
});

export function NavItem({
  title,
  href,
  depth,
  children,
  icon: Icon,
  className,
  open: openProp,
  info: Info,
  openInNewTab = false,
  ...rest
}) {
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <Wrapper disableGutters key={title} {...rest}>
        <Button className="button" onClick={handleToggle} style={style}>
          {Icon && <Icon className="icon" size="20" />}
          <span className="title">{title}</span>
          {open ? (
            <ExpandLessIcon size="small" color="inherit" />
          ) : (
            <ExpandMoreIcon size="small" color="inherit" />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </Wrapper>
    );
  }

  return (
    <Wrapper disableGutters key={title} {...rest}>
      <Button
        activeClassName="active"
        className={`buttonLeaf depth-${depth}`}
        component={RouterLink}
        exact
        style={style}
        to={href}
        target={openInNewTab ? '_blank' : undefined}
      >
        {Icon && <Icon className="icon" size="20" />}
        <span className="title">{title}</span>
        {Info && <Info className="info" />}
      </Button>
    </Wrapper>
  );
}
