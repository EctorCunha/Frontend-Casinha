import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  CardContent,
  TableContainer,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  CardHeader,
  Divider,
  CardActions,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { TablePaginationActions } from './TablePaginationActions';

import { Wrapper } from './Table.styles';

export function Table({
  columns,
  data,
  isPagination,
  isNewPagination,
  cardHeader,
  cardActions,
  cardActionsLinkTo,
  paginator,
  onPaginate,
  isPaginatorAPI,
}) {
  function getKeys() {
    if (columns.body.length > 0) {
      let keys = Object.keys(columns.body[0]);
      return keys;
    }
  }

  function getHeader() {
    const { header } = columns;
    if (header) {
      return header.map(key => <TableCell key={key}>{key}</TableCell>);
    }
  }

  function RenderRow(props) {
    return props.keys.map(key => {
      if (key !== 'id' && key !== 'actions') {
        return <TableCell key={key}> {props.data[key]} </TableCell>;
      }

      if (key === 'actions') {
        return (
          <TableCell key={key} align="right">
            <Box display="flex" justifyContent="flex-end">
              {props.data[key]}
            </Box>
          </TableCell>
        );
      }

      return false;
    });
  }

  function getRowsData() {
    let items = columns.body;
    let keys = getKeys();

    let itemsSlice = !isPaginatorAPI
      ? items.slice(page * limit, page * limit + limit)
      : items;

    if (itemsSlice) {
      return itemsSlice.map((row, index) => (
        <TableRow key={index}>
          <RenderRow key={row.id} data={row} keys={keys} columns={columns} />
        </TableRow>
      ));
    }
  }

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  function handlePageChange(event, newPage) {
    setPage(newPage);
  }

  function handleLimitChange(event) {
    setLimit(event.target.value);
  }

  function handleChangePage(event, page) {
    onPaginate({ pageCurrent: page + 1 });
  }

  function handleChangeRowsPerPage(event) {
    onPaginate({ pageItemsPerPage: event.target.value });
  }

  return (
    <Wrapper>
      {cardHeader && (
        <>
          <CardHeader title={cardHeader} />
          <Divider />
        </>
      )}

      <CardContent className="content">
        <PerfectScrollbar>
          <TableContainer>
            <MuiTable>
              <TableHead>
                <TableRow>{getHeader()}</TableRow>
              </TableHead>
              <TableBody>{getRowsData()}</TableBody>
            </MuiTable>
          </TableContainer>
        </PerfectScrollbar>
      </CardContent>
      {cardActions && (
        <CardActions className="actions">
          <Button component={RouterLink} size="small" to={cardActionsLinkTo}>
            Ver tudo
            <NavigateNextIcon />
          </Button>
        </CardActions>
      )}
      {isPagination && Object.keys(paginator).length > 0 && (
        <CardActions className="actions">
          <TablePagination
            component="div"
            labelRowsPerPage="Itens por página"
            labelDisplayedRows={({ from, to, count }) => {
              return '' + from + '-' + to + ' de ' + count;
            }}
            count={paginator.totalItemCount}
            onPageChange={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={paginator.pageCurrent - 1}
            rowsPerPage={paginator.pageItemsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            ActionsComponent={TablePaginationActions}
          />
        </CardActions>
      )}
      {!isNewPagination && (
        <CardActions className="actions">
          <TablePagination
            component="div"
            labelRowsPerPage="Itens por página"
            labelDisplayedRows={({ from, to, count }) => {
              return '' + from + '-' + to + ' de ' + count;
            }}
            count={data.length}
            onPageChange={handlePageChange}
            onChangeRowsPerPage={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            ActionsComponent={TablePaginationActions}
          />
        </CardActions>
      )}
    </Wrapper>
  );
}
