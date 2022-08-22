import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Page } from '@/components/Page';
import { Header } from '@/components/Header';
import { CasinhaApi } from '@/services/CasinhaApi';
import { useInterface } from '@/hooks/useInterface';
import { UsersTable } from './Table';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const usersApi = new CasinhaApi('/users');

  async function fetchUsers() {
    try {
      addGlobalLoading();
      const response = await usersApi.getList();
      setUsers(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Page title="Usuários">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Usuários"
          textTypography="Usuários"
          linkButtonTo="/usuarios/criar"
          textButton="Novo"
          textLink="Painel de Controle"
          buttonNew
        />
        {users && <UsersTable customers={users} />}
      </Container>
    </Page>
  );
}
