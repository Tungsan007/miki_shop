import React, { useEffect, useState } from 'react';
import CartNav from 'src/sections/cart/CartNav';
import { useRecoilValue } from 'recoil';
import CartItemsList from './CartItemsList';
import CartCalculation from './CartCalculation';
import axios from 'axios';
import { dataUser } from 'src/recoils/dataUser';
import Link from 'next/link';

export default function CartMain() {
  const [cartItem, setCartItem] = useState([]);
  const [isSsr, setIsSsr] = useState(true);
  const totalCost = cartItem?.reduce((total, product) => {
    return total + product.quantity * product.cost;
  }, 0);

  const user = useRecoilValue(dataUser);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios({
        method: 'POST',
        url: '/api/cart/getCart',
        data: { userId: user.userInforId },
      });
      console.log(data);
      setCartItem(data?.data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
    setIsSsr(false);
  }, []);

  return !isSsr ? (
    <div className="container mt-[35px] bg-white mb-[140px]">
      <CartNav />
      {cartItem.length != 0 ? (
        <div className="flex justify-between">
          <CartItemsList items={cartItem} setItemState={setCartItem} />
          <CartCalculation total={totalCost} />
        </div>
      ) : (
        <div className="h-[300px] flex items-center justify-center">
          <div className="w-[240px] flex flex-col justify-center items-center">
            <img
              className="w-[108px] h-[98px] mx-auto"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png"
            />
            <div className="text-primary_3 text-[1rem] leading-4 mt-[1rem] font-bold">
              Giỏ hàng của bạn còn trống
            </div>
            <Link href="/products">
              <a>
                <button className="py-2 px-[46px] border-[1px] border-btn rounded-lg hover:bg-btn text-btn hover:text-neutral_5 font-bold mt-5 mx-auto">
                  Mua hàng
                </button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  ) : null;
}
