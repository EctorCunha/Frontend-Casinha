import { Box, IconButton, styled } from '@mui/material';
import {
  FirstPage as FirstPageIcon,
  LastPage as LastPageIcon,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from '@mui/icons-material';

const Wrapper = styled(Box)({
  flexShrink: 0,
  marginLeft: 24,
});

export function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  function handleFirstPageButtonClick(event) {
    onPageChange(event, 0);
  }

  function handleBackButtonClick(event) {
    onPageChange(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onPageChange(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <Wrapper>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Wrapper>
  );
}
