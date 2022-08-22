import { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Table } from '@/components/Table';
import { useInterface } from '@/hooks/useInterface';

export function LatestCustomers() {
  const [customers, setCustomers] = useState([]);
  const customersApi = new CasinhaApi('/users');
  const { addGlobalLoading, removeGlobalLoading } = useInterface();

  async function fetchCustomers() {
    try {
      addGlobalLoading();
      const response = await customersApi.getList();
      setCustomers(response.data.slice(0, 5));
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  const getHeader = () => {
    return ['Data de Criação', 'Nome', ''];
  };

  const getBody = () => {
    return customers.map(customer => {
      return {
        date: <Typography>01/01/0101</Typography>,
        customer: (
          <>
            <Typography fontWeight={700}>
              {customer.firstName} {customer.firstName}
            </Typography>
          </>
        ),
        actions: (
          <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={() => navigate(`/usuarios/${customer.id}`)}
          >
            Ver
          </Button>
        ),
      };
    });
  };

  const columns = {
    header: getHeader(),
    body: getBody(),
  };

  return (
    <Table
      columns={columns}
      data={customers}
      cardHeader="Últimos Clientes"
      cardActions
      cardActionsLinkTo="/usuarios"
      isNewPagination
    />
  );
}
