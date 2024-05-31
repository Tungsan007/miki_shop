import Page from 'src/components/Page';
import MainLayout from 'src/layouts';
import ProductsPage from './ProductsPage';
//always import from src folder, not "./", "../", "../../",...

Product.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function Product() {
  return (
    <div>
      <Page
        data={{
          title: 'Miki Shop',
          description: '',
          url: '',
          thumbnailUrl: '',
        }}
      />
      <ProductsPage />
    </div>
  );
}
