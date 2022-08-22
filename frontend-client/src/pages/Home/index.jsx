import { Page } from '@/components/Page';
import { ProductList } from './ProductList';
import { FindByCategory } from './FindByCategory';
import { Banner } from './Banner';
import { Search } from './Search';
import { Newsletter } from './Newsletter';
import 'swiper/css';

export function Home() {
  return (
    <Page title="Home" description="O melho lugar para você encontrar conforto e simplicidade em Tiny House">
      <Banner />
      <Search />
      <FindByCategory />
      <ProductList />
      <Newsletter />
    </Page>
  );
}
