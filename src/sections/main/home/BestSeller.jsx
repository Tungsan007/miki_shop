import React from 'react'
import Button from 'src/components/Button';

export function BestSellerSection() {
  return (
    <div className="mx-[150px] mt-[122px] h-[669px] relative">
      <p className="absolute w-[296px] h-[39px] left-0 top-[2px] font-bold text-[32px] leading-[39px] text-neutral_1">Sản phẩm nổi bật</p>
      <Button
        title={'Xem tất cả'}
        className={'rounded-btnB w-[184px] h-[40px] left-[950px] top-[1px] bg-btn text-[#ffffff] absolute font-bold text-[16px] leading-6 z-[1000]'}
      />
      <div className='pt-[112px] grid grid-cols-4 gap-10'>
        <div className='text-center'>
          <img src="/assets/images/bestSellerProduct.png" alt="" className='w-[254px] h-[300px] object-contain object-center' />
          <p className='mt-[24px] mb-[8px] text-[20px] font-bold leading-[26px]'>Lira Earrings</p>
          <p className='text-primary_2 mb-[16px] text-[20px] leading-[28px] font-bold'>355.000đ</p>
          <Button
            title={'Thêm vào giỏ hàng'}
            className={'rounded-btnB w-[254px] h-[40px] bg-btn text-[#ffffff] font-bold text-[16px] leading-6'}
          />
        </div>
        <div className='text-center'>
          <img src="/assets/images/bestSellerProduct.png" alt="" className='w-[254px] h-[300px] object-contain object-center' />
          <p className='mt-[24px] mb-[8px] text-[20px] font-bold leading-[26px]'>Lira Earrings</p>
          <p className='text-primary_2 mb-[16px] text-[20px] leading-[28px] font-bold'>355.000đ</p>
          <Button
            title={'Thêm vào giỏ hàng'}
            className={'rounded-btnB w-[254px] h-[40px] bg-btn text-[#ffffff] font-bold text-[16px] leading-6'}
          />
        </div>
        <div className='text-center'>
          <img src="/assets/images/bestSellerProduct.png" alt="" className='w-[254px] h-[300px] object-contain object-center' />
          <p className='mt-[24px] mb-[8px] text-[20px] font-bold leading-[26px]'>Lira Earrings</p>
          <p className='text-primary_2 mb-[16px] text-[20px] leading-[28px] font-bold'>355.000đ</p>
          <Button
            title={'Thêm vào giỏ hàng'}
            className={'rounded-btnB w-[254px] h-[40px] bg-btn text-[#ffffff] font-bold text-[16px] leading-6'}
          />
        </div>
        <div className='text-center'>
          <img src="/assets/images/bestSellerProduct.png" alt="" className='w-[254px] h-[300px] object-contain object-center' />
          <p className='mt-[24px] mb-[8px] text-[20px] font-bold leading-[26px]'>Lira Earrings</p>
          <p className='text-primary_2 mb-[16px] text-[20px] leading-[28px] font-bold'>355.000đ</p>
          <Button
            title={'Thêm vào giỏ hàng'}
            className={'rounded-btnB w-[254px] h-[40px] bg-btn text-[#ffffff] font-bold text-[16px] leading-6'}
          />
        </div>
      </div>
    </div>
  );
}
