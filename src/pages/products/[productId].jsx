import axios from 'axios';
import { useEffect, useState } from 'react';
import Page from 'src/components/Page';
import ToastMessage from 'src/components/ToastMessage';
import MainLayout from 'src/layouts';
import ProductDetailsSection1 from 'src/sections/main/products/ProductDetailsSection1';
import ProductDetailsSection2 from 'src/sections/main/products/ProductDetailsSection2';
import ProductDetailsSection3 from 'src/sections/main/products/ProductDetailsSection3';
//always import from src folder, not "./", "../", "../../",...

ProductDetails.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getStaticPaths = async () => {
  const res = await axios({
    method: 'GET',
    url: 'http://localhost:3000/api/products/getAllProducts'
  })
  const products = res.data.products
  const paths = products?.map(product => ({
    params: { productId: '' + product.slug }
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const res = await axios({
    method: 'GET',
    url: `http://localhost:3000/api/products/${params.productId}`
  })
  const product = res.data.productList
  const feedback = res.data.feedBack
  return { props: { feedback, product } }
}

export default function ProductDetails({ product, feedback }) {
  const [toast, setToast] = useState(false);
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
      {toast &&
        <ToastMessage />
      }
      <ProductDetailsSection1 product={product[0]} feedback={feedback} setToast={setToast} />
      <ProductDetailsSection2 product={product[0]} feedback={feedback}/>
      <ProductDetailsSection3 product={product[0]} />
    </div>
  );
}
