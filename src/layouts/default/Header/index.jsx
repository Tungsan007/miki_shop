import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, selector, useResetRecoilState } from 'recoil';
import {
   IconDown,
   LogoIcon,
   SearchIcon,
   UserIcon,
   CartIcon,
   Account,
   Purchase,
   Logout,
} from 'src/components/icons';
import { cartState } from 'src/recoils/cartState';
import { dataUser } from 'src/recoils/dataUser';

export function Header() {
   const user = useRecoilValue(dataUser);
   const checkRole = user.role === 'admin' ? '/admin' : '/profile';
   const checkLogin = user.role ? checkRole : '/login';

   const LogOut = useResetRecoilState(dataUser);

   const [searchTerm, setSearchTerm] = useState('');
   const [products, setProducts] = useState([]);
   const [dataSearch, setDataSearch] = useState(null);
   const [hiddenResult, setHiddenResult] = useState(false);
   const [indexProductSearch, setIndexProductSearch] = useState(0);

   const cart = useRecoilValue(cartState);
   const [isSSR, setIsSSR] = useState(true);
   useEffect(() => {
      setIsSSR(false);
   }, []);
   //variable clear setTimeout
   const typingTimeOutRef = useRef(null);
   const router = useRouter();

   //Click search
   const handleSearch = (product) => {
      setSearchTerm('');
      setProducts([]);
      router.push(`http://localhost:3000/products/${product.slug}`);
   };

   const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
         if (indexProductSearch == 9) return setIndexProductSearch(0);
         setIndexProductSearch((prev) => prev + 1);
      } else if (e.key === 'ArrowUp') {
         if (indexProductSearch == 0) return setIndexProductSearch(9);
         setIndexProductSearch((prev) => prev - 1);
      } else if (e.key === 'Enter') {
         handleSearch(products[indexProductSearch]);
      }
   };
   //handle show hints
   const handleDataSearch = (e) => {
      setSearchTerm(e.target.value);
      if (e.target.value !== '') {
         const value = e.target.value;
         // document.addEventListener('keydown', (e) => {
         //   if (e.key === 'Enter') {
         //     (async () => {
         //       const res = await axios({
         //         method: 'POST',
         //         url: 'api/products/...',
         //         data: { value: value },
         //       });
         //     })();
         //   }
         // });
         if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
         }
         typingTimeOutRef.current = setTimeout(() => {
            const filterForm = {
               searchTerm: value,
            };
            setDataSearch(filterForm);
         }, 300);
      } else {
         setProducts([]);
      }
   };
   useEffect(() => {
      if (!dataSearch) return;
      (async () => {
         const res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/products/search',
            data: { query: dataSearch?.searchTerm },
         });
         setProducts(res.data.products);
      })();
   }, [dataSearch]);
   //hidden icon Cart and User
   const [hidden, setHidden] = useState(true);
   //change size Input
   const growUpInput = (parrent) => {
      setHidden(false);
      parrent.style.width = '396px';
   };

   const changeNormal = (parrent) => {
      setHidden(true);
      parrent.style.width = '252px';
   };

   return (
      <>
         <div className="px-[152px] containerHeader">
            <ul className="header-section1">
               <Link href="/">
                  <li>
                     <a className="font-bold cursor-pointer">Trang Chủ</a>
                  </li>
               </Link>
               <Link href="/">
                  <li className="flex items-center group">
                     <a className="relative ml-[50px] font-medium cursor-pointer">Sản phẩm</a>
                     <IconDown className="ml-[14px] mt-[1px] cursor-pointer" />
                     <div className="absolute top-[10px] left-0 w-[1136px] h-[186px] mt-[40px] z-20 bg-bgm justify-evenly font-medium leading-[24px] hidden group-hover:flex animate-growth origin-[20%_2%] pseudoDropdown hover:flex">
                        <ul className="w-[254px] text-center h-[186px]">
                           <li className="pt-[2px] pb-[13px] font-bold">Nhẫn</li>
                           <li className="pb-[8px]">Nhẫn cỡ lớn</li>
                           <li className="pb-[8px]">Nhẫn ngón út</li>
                           <li className="pb-[8px]">Nhẫn xoay</li>
                           <li>Nhẫn cưới</li>
                        </ul>
                        <div className="h-[129px] border-solid border-l-[1px] border-neutral_1 mt-[21px]"></div>
                        <ul className="w-[254px] text-center h-[186px]">
                           <li className="pt-[2px] pb-[13px] font-bold">Dây chuyền</li>
                           <li className="pb-[8px]">Dây chuyền trơn</li>
                           <li className="pb-[8px]">Dây chuyền có mặt</li>
                           <li>Mặt dây chuyền</li>
                        </ul>
                        <div className="h-[129px] border-solid border-l-[1px] border-neutral_1 mt-[21px]"></div>
                        <ul className="w-[254px] text-center h-[186px]">
                           <li className="pt-[2px] pb-[13px] font-bold">Bông tai</li>
                           <li className="pb-[8px]">Bông tai xỏ lỗ</li>
                           <li className="pb-[8px]">Bông tai treo</li>
                           <li>Khuyên vành tai</li>
                        </ul>
                        <div className="h-[129px] border-solid border-l-[1px] border-neutral_1 mt-[21px]"></div>
                        <ul className="w-[254px] text-center h-[186px]">
                           <li className="pt-[2px] pb-[13px] font-bold">Lắc</li>
                           <li className="pb-[8px]">Lắc tay</li>
                           <li className="pb-[8px]">Lắc chân</li>
                           <li>Charm</li>
                        </ul>
                     </div>
                  </li>
               </Link>

               <Link href="/">
                  <li>
                     <a className="ml-[40px] font-medium cursor-pointer">Về chúng tôi</a>
                  </li>
               </Link>
            </ul>
            <div className="mt-[16px]">
               <LogoIcon />
               <h1 className="logo">MIKI JEWELRY</h1>
            </div>
            <div className="header-section3">
               <div className="relative">
                  <div className="duration-200 ease-linear wrapInput">
                     <input
                        onChange={handleDataSearch}
                        onKeyDown={handleKeyDown}
                        value={searchTerm}
                        onBlur={(e) => {
                           changeNormal(e.target.parentNode), setHiddenResult(false);
                           setIndexProductSearch(0);
                        }}
                        onFocus={(e) => {
                           growUpInput(e.target.parentNode), setHiddenResult(true);
                        }}
                        id="inputSearch"
                        className="pr-8 input"
                        type="text"
                        placeholder="Tìm kiếm"
                     />
                     <label htmlFor="inputSearch">
                        <SearchIcon
                           className="h-full text-[15px] mr-[16px] cursor-pointer"
                           width="24"
                           stroke="black"
                        />
                     </label>
                     {hiddenResult && !!products.length && (
                        <ul className="w-full absolute bg-[#fbe8e8] top-[100%] z-20 pt-[8px] rounded-tl-btnB rounded-tr-btnB border-[1px] border-neutral_4">
                           {products?.slice(0, 10)?.map((product, index) => {
                              return (
                                 <div
                                    onMouseDown={() => handleSearch(product)}
                                    key={product._id}
                                    className={`flex items-center hover:bg-neutral_4 leading-[38px] select-none ${indexProductSearch === index ? 'bg-neutral_4' : ''
                                       }`}
                                 >
                                    <SearchIcon className="mr-[6px] ml-[12px]" width="26" stroke="#747272" />
                                    <li title={product.name}>
                                       {product?.name?.slice(0, 30)}
                                       {product?.name?.slice(30, 31) !== '' && '...'}
                                    </li>
                                 </div>
                              );
                           })}
                           {!!products.length && (
                              <p className="text-[13px] text-neutral_3 text-end mr-[4px] mb-[4px] mt-[4px] cursor-pointer">
                                 <em>Báo cáo đề xuất tìm kiếm không phù hợp</em>
                              </p>
                           )}
                        </ul>
                     )}
                  </div>
               </div>
               <div className="flex ml-[25px]">
                  {hidden && (
                     <>
                        <Link href="/cart">
                           <a>
                              <CartIcon />
                           </a>
                        </Link>
                        {!isSSR ? (
                           <div
                              className={`${cart != 0 ? 'visible' : 'invisible'
                                 } relative left-[-14px] rounded-full px-[0.3125rem] text-center h-6 border-solid border-neutral_1 text-white bg-red-400 mr-[-0.875rem] leading-6 min-w-[24px] w-auto top-[-9px]`}
                           >
                              {cart}
                           </div>
                        ) : null}
                     </>
                  )}
                  {hidden && (
                     <div className="relative group">
                        <Link href={checkLogin}>
                           <a>
                              <UserIcon className={'ml-[35px] cursor-pointer hover:opacity-60'} />
                           </a>
                        </Link>

                        <div className="absolute bottom-[-138px] right-[-52px] z-20 hidden group-hover:block animate-growth">
                           <div className="border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent w-[0px] h-[0px] border-b-[12px] border-b-primary_5 shadow-lg ml-[120px]"></div>
                           <ul className="shadow-xl bg-primary_5 cursor-pointer">
                              <li className="w-[200px]  text-left px-3 py-2 leading-7 text-base hover:bg-primary_2 hover:text-white font-bold">
                                 <span className="flex items-center justify-start">
                                    <Account />
                                    <p className="ml-2">Tài khoản của tôi</p>
                                 </span>
                              </li>
                              <li className="w-[200px] text-left px-3 py-2 leading-7 text-base hover:bg-primary_2 hover:text-white font-bold">
                                 <span className="flex items-center justify-start">
                                    <Purchase className={'w-[20px] h-[20px]'} />
                                    <p className="ml-3">Đơn mua</p>
                                 </span>
                              </li>
                              <li className="w-[200px] text-left px-3 py-2 leading-7 text-base hover:bg-primary_2 hover:text-white font-bold">
                                 <span
                                    onClick={() => {
                                       LogOut(),
                                          router.replace('/');
                                    }}
                                    className="flex items-center justify-start"
                                 >
                                    <Logout />
                                    <p className="ml-2">Đăng xuất</p>
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}
