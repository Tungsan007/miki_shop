import React from 'react'
import ProductCard from 'src/components/ProductCard'

export default function ProductDetailsSection3() {
  return (
    <div className='px-[152px] mt-[56px]'>
      <svg
        className='absolute top-[738px] left-0'
        xmlns="http://www.w3.org/2000/svg" width="160" height="359" viewBox="0 0 160 359" fill="none">
        <circle cx="-19.5" cy="179.5" r="179.5" fill="#B78D71" fill-opacity="0.15"/>
        <circle cx="-19.5003" cy="179.5" r="143.634" fill="#B78D71" fill-opacity="0.1"/>
      </svg>
      <svg
        className='absolute top-[1000px] right-0 z-10'
        xmlns="http://www.w3.org/2000/svg" width="197" height="359" viewBox="0 0 197 359" fill="none">
        <circle cx="179.5" cy="179.5" r="179.5" fill="#B78D71" fill-opacity="0.15"/>
        <circle cx="179.5" cy="179.5" r="143.634" fill="#B78D71" fill-opacity="0.1"/>
      </svg>
      <svg
        className='absolute top-[2764px] left-[889px]'
        xmlns="http://www.w3.org/2000/svg" width="551" height="170" viewBox="0 0 551 170" fill="none">
        <circle cx="275.5" cy="275.5" r="275.5" fill="#B78D71" fill-opacity="0.15"/>
        <circle cx="275.5" cy="275.5" r="220.453" fill="#B78D71" fill-opacity="0.1"/>
      </svg>
      <h1 className='text-[32px] leading-[40px] font-bold text-neutral_1'>Sản phẩm đã xem </h1>
      <div className='mt-[68px] flex justify-between text-center'>
         <ProductCard src='/assets/images/productCard_recently1.jpg' nameProduct='Lira Earrings1' price='355.000đ  '/>
         <ProductCard src='/assets/images/productCard_recently2.jpg' nameProduct='Lira Earrings2' price='365.000đ  '/>
         <ProductCard src='/assets/images/productCard_recently3.jpg' nameProduct='Lira Earrings3' price='395.000đ  '/>
         <ProductCard src='/assets/images/productCard_recently4.jpg' nameProduct='Lira Earrings4' price='455.000đ  '/>
      </div>
      <h1 className='text-[32px] leading-[40px] font-bold text-neutral_1 mt-[120px]'>Có thể bạn cũng thích</h1>
      <div className='mt-[68px] flex justify-between text-center pb-[120px]'>
         <ProductCard src='/assets/images/suggestions_productCard1.jpg' nameProduct='Lira Earrings5' price='155.000đ  '/>
         <ProductCard src='/assets/images/suggestions_productCard2.jpg' nameProduct='Lira Earrings6' price='359.000đ  '/>
         <ProductCard src='/assets/images/suggestions_productCard3.jpg' nameProduct='Lira Earrings7' price='655.000đ  '/>
         <ProductCard src='/assets/images/suggestions_productCard4.jpg' nameProduct='Lira Earrings8' price='378.000đ  '/>
      </div>
    </div>
  )
}
