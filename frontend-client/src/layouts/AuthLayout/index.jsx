import { AuthHeader } from './AuthHeader';
import { AuthFooter } from './AuthFooter';
import { Wrapper, Main } from './styles';

export function AuthLayout({ children }) {
  return (
    <Wrapper>
      <AuthHeader />
      <Main component="main">{children}</Main>
      <AuthFooter />
    </Wrapper>
  );
}
