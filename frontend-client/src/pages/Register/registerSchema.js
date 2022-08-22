import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('Campo obrigatório'),
  lastName: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('E-mail inválido').max(255).required('Campo obrigatório'),
  emailConfirmation: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Os e-mails devem ser iguais')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(8, 'Mínimo 8 caracteres')
    .required('Campo obrigatório')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      'Pelo menos 1 maiúscula, 1 minúscula e 1 numero'
    ),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('Campo obrigatório'),
});
