import { AppBar, Box, styled } from "@mui/material";

export const Wrapper = styled(AppBar)({
  paddingTop: 16,
  paddingBottom: 8,
  transition: 'all .3s ease',
  path: {
    transition: 'all .3s ease',
  },
});

export const LogoContainer = styled(Box)({
  svg: {
    width: 180,
  },
});

export const UserBlock = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 16,
});
