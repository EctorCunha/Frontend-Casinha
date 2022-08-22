import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { Formik } from 'formik';
import { Page } from '@/components/Page';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Header } from '@/components/Header';
import { UserForm } from './UserForm';
import { userModel } from '@/models/UserModel';
import { useInterface } from '@/hooks/useInterface';

export default function UserDetails() {
  const [user, setUser] = useState({});
  const [roles, setRoles] = useState([]);
  const { entityId } = useParams();
  const navigate = useNavigate();
  const { addGlobalLoading, removeGlobalLoading } = useInterface();
  const usersApi = new CasinhaApi('/users');
  const rolesApi = new CasinhaApi('/roles');

  async function fetchRoles() {
    try {
      addGlobalLoading();
      const response = await rolesApi.getList();
      setRoles(response.data);
    } catch {
    } finally {
      removeGlobalLoading();
    }
  }

  async function fetchUser() {
    try {
      const response = await usersApi.get(entityId);
      setUser(response.data);
    } catch {}
  }

  useEffect(() => {
    fetchUser();
    fetchRoles();
  }, []);

  async function handleSubmit(values) {
    const edit = Boolean(user.id);
    const create = !Boolean(user.id);

    if (edit) {
      await usersApi.put(`${user.id}`, values);
    }

    if (create) {
      await usersApi.post(values);
    }

    navigate('/usuarios');
  }

  const initialValues = user.id ? user : userModel;

  return (
    <Page title="Usuário">
      <Container maxWidth={false}>
        <Header
          textBreadcrumb="Usuários"
          textTypography={user.id ? 'Editar Usuário' : 'Adicionar Usuário'}
          textLink="Painel de Controle"
          linkToBreadcrumb="/usuarios"
        />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {formikProps => {
            return <UserForm formikProps={formikProps} roles={roles} />;
          }}
        </Formik>
      </Container>
    </Page>
  );
}
