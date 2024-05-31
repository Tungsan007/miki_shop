import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Datas from './ProductsData.jsx';
import Circle from './Circle.jsx';
import SortProducts from './SortProducts.jsx';
import Pagination from './Pagination.jsx';
import BreadCrumb from 'src/components/BreadCrumb/BreadCrumb.js';

function ProductsPage(props) {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);

  const [sort, setSort] = useState('');

  const [sortList, setSortList] = useState([]);

  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    dataProducts();
  }, [page, sort]);

  const dataProducts = async (data) => {
    try {
      const res = axios({
        method: 'GET',
        url: `http://localhost:3000/api/products/pagination?page=${page}&limitProduct=10&${sort}`,
      });
      res.then((respon) => {
        const datas = respon.data;
        const { data, pagination } = datas;
        const { _page, _limit, _totalProducts } = pagination;
        const list = respon;
        setSortList(datas.data); //Get list of products
        //setPagination(pagination);
        setPageCount(Math.ceil(_totalProducts / _limit));
      });
    } catch (err) {
      console.log('Call API Error');
    }
  };

  return (
    <div className="font-main relative">
      <div className="w-full h-[530px] overflow-hidden ">
        <img
          className="translate-y-[-450px]"
          src="/assets/images/productpage.jpg"
          alt="Product Page"
        />
      </div>
      <div className="mx-[152px] ">
        <div
          className="flex font-main font-medium text-base tracking-[-0.019rem]
          items-center
          mt-10 mb-12
          "
        >
          <BreadCrumb
            params={[
              {
                href: '/',
                label: 'Trang chủ',
              },
              {
                href: '/products',
                label: 'Tất cả sản phẩm ',
              },
            ]}
          />
        </div>
        <ul className="flex justify-between ">
          <li>
            <h3 className="font-semibold text-2xl tracking-[-0.019rem] leading-[109%]">
              Danh mục sản phẩm
            </h3>
          </li>

          <li className="relative sortListProduct">
            <SortProducts
              page={page}
              setPage={setPage}
              setSort={setSort}
              sortList={sortList}
              setSortList={setSortList}
              toggleActive={toggleActive}
              active={active}
            />
          </li>
        </ul>
        {/* Product list */}
        <Datas data={sortList} />
        {/* Button next Page */}
        <Pagination datas={sortList} pageCount={pageCount} setPage={setPage} />
      </div>

      <Circle />
    </div>
  );
}

export default ProductsPage;
