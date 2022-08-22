import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingBlock: 8,
  paddingInline: 24,
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const SocialLinks = styled(Box)({
  display: 'flex',
  gap: 8,
  '& a': {
    width: 24,
    height: 24,
  },
  '& svg': {
    color: '#ffffff',
  },
});
