import { Typography } from '@mui/material';
import { Wrapper, ContainerNewsletter } from './styles';
import Mailchimp from 'react-mailchimp-form';


export function Newsletter() {
  return (
    <Wrapper>
      <ContainerNewsletter>
        <Typography variant="h4">Quer receber novidades sobre o nosso site?</Typography>
        <Mailchimp
          action='https://ctdcasinha.us18.list-manage.com/subscribe/post?u=e62c358dc15f5921e97a8b863&amp;id=fe3213edd0'

          fields={[
            {
              name: 'EMAIL',
              placeholder: 'E-mail',
              type: 'email',
              required: true
            },
          ]}

          messages={
            {
              sending: "Enviado...",
              success: "Obrigado por se inscrever!",
              error: "Erro para enviar",
              empty: "Preencher todos os campos",
              duplicate: "Cadastro duplicado",
              button: "Cadastrar"
            }
          }
          className='mailChimp'
        />
      </ContainerNewsletter>
    </Wrapper>
  );
}
