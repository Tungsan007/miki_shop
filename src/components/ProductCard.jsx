import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ src , nameProduct , price }) {
  return (
    <div>
      <Link href='#'>
        <Image className='cursor-pointer' src={src} alt='anh' width={254} height={300}/>
      </Link>
      <Link href='#'>
        <p className='font-bold textTitle mt-[24px] cursor-pointer'>{nameProduct}</p>
      </Link>
      <p className='mt-[6px] textTitle text-primary_1'>{price}</p>
      <button className='bg-btn text-white px-[40px] py-[4px] rounded-btnB mt-[16px]'>Thêm vào giỏ hàng</button>
    </div>
  )
}
