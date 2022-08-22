import { MainHeader } from "./MainHeader";
import { MainFooter } from "./MainFooter";
import { Wrapper, Main } from './styles';

export function MainLayout({ children }) {
  return (
    <Wrapper>
      <MainHeader />
      <Main component="main">
        {children}
      </Main>
      <MainFooter />
    </Wrapper>
  )
}
