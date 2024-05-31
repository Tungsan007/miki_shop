import Image from 'next/image'
import React from 'react'
import { IconStar } from './icons'
import SellerFeedback from './sellerFeedback'

export default function AvartarChat({productname, feedback, src, userName}) {
  return (
   <>
      {
      feedback !== [] &&  
      Object.values(feedback).map(ele => {
         return (
            <>
         <div className='flex mt-[24px]'>
         <div>
            <Image src={src} alt='anh' width={54} height={54}/>
         </div>
         <div className='ml-[15px]'>
            <div className="flex">
             <p className="font-medium text-base">{userName}</p><a href='#feedback' className='border-[1px] border-red-600 text-red-600 px-[2px] ml-[20px]'>Sửa</a>
            </div>
            <div className="flex mt-[2px] w-[80px] h-[15px] mr-[8px]">
              {[...Array(ele?.rating)].map(() => {
                                return <IconStar fill="#FBBC05" />
                            })}
                    {(()=> {
                    const arr = []
                    for (let i = 1 ; i <= 5 - (ele?.rating) ; i++) {
                      const Item = <IconStar fill="#A9A9A9" />
                      arr.push(Item)
                    }
                    return arr;
                    })()}
            </div>
            <p>Công dụng: {ele.desc}</p>
            {
              ele?.images?.map((img, index) => {
                return (
                   <div className='relative mt-[6px] inline-block ml-[10px]'>
                      <img className='w-[64px] h-[120px]' src={img?.url} alt='anh'/>
                   </div>
                )
             }) 
            }
         </div>
         </div>
         <div className='flex ml-[68px]'>
            <p>{ele?.createdAt}</p> 
            <p className='ml-[4px]'>| Loại sản phẩm: {productname}</p> 
         </div>
         <SellerFeedback />
         </>
         )
      })
      }
   </>
  )
}  
