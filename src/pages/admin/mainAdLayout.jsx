import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainAdLayout({ children }) {

    const [option, setOption] = useState(false);
    const [option2, setOption2] = useState(false);






    return (

        (<div className='grid grid-cols-12'>
            <div className="col-span-2 bg-[#345ccd] text-[#fff] text-start w-[225px] p-5 fixed top-0 bottom-0">
                <ul>
                    <li className='py-4 font-bold text-center'>
                        ADMIN<sup>Shop</sup>
                    </li>
                    <li className='py-3 border-y-[1px] border-solid border-[#5f84ec] font-bold'>Bảng điều khiển</li>
                    <li>
                        <p className='my-3 font-bold text-[#5f84ec]'>CHÍNH</p>
                        <div
                            className='py-3 cursor-pointer hover:opacity-60'
                            onClick={
                                () => {
                                    if (option === true) {
                                        setOption(false);
                                    }
                                    else {
                                        setOption(true);
                                    }
                                }
                            }>
                            Sản phẩm & Banner
                        </div>
                        {option &&
                            (<div className='overflow-hidden'>
                                <div
                                    className='p-3 text-black bg-white rounded-[5px] my-[5px] duration-100 animate-[down1_0.5s_ease]'>
                                    <ul>
                                        <li className='text-gray-400'>Sản phẩm & Banner</li>
                                        <Link href='/admin/Products'>
                                            <a>
                                                <li className='p-2 hover:bg-gray-200'>Sản phẩm</li>
                                            </a>
                                        </Link>
                                        <Link href='/admin/mgnUser'>
                                            <a>
                                                <li className='p-2 hover:bg-gray-200'>User</li>
                                            </a>
                                        </Link>
                                        <li className='p-2 hover:bg-gray-200'>Banner</li>
                                    </ul>
                                </div>
                            </div>)
                        }
                        <div
                            className='py-3 border-b-[1px] border-solid border-[#5f84ec] cursor-pointer hover:opacity-60'
                            onClick={
                                () => {
                                    if (option2 === true) {
                                        setOption2(false);
                                    }
                                    else {
                                        setOption2(true);
                                    }
                                }
                            }>
                            Đơn đặt hàng
                        </div>
                        {option2 &&
                            (<div className='overflow-hidden'>
                                <div
                                    className='p-3 text-black bg-white rounded-[5px] my-[5px] duration-100 animate-[down1_0.5s_ease]'
                                >
                                    <ul>
                                        <li className='text-gray-400'>Đơn đặt hàng</li>
                                        <Link href={'/admin/Order/all'}>
                                            <a>
                                                <li className='p-2 hover:bg-gray-200'>Tất cả</li>
                                            </a>
                                        </Link>
                                        <li className='p-2 hover:bg-gray-200'>Chờ xác nhận</li>
                                        <li className='p-2 hover:bg-gray-200'>Đang giao</li>
                                        <li className='p-2 hover:bg-gray-200'>Đã giao</li>
                                        <li className='p-2 hover:bg-gray-200'>Hủy</li>
                                    </ul>
                                </div>
                            </div>)
                        }
                    </li>
                </ul>
            </div>
            <div className='col-span-10 bg-[#eaecef] ml-[230.675px] w-full'>
                <div className="bg-white h-14 bg-#ffffff flex justify-end items-center shadow-[0_2px_2px_1px_rgba(0,0,0,0.2)]">
                    <div className='mr-2 w-[200px]'>
                        <p className='inline-block px-5 border-l-[1px] border-solid border-gray-600'>
                            ADMIN
                        </p>
                        <img className='px-[2px] inline-block w-[40px] h-[40px] rounded-full' src="https://www.kindpng.com/picc/m/475-4750705_school-administrator-icon-png-transparent-png.png" alt="" />
                    </div>
                </div>
                {children}
            </div>
        </div>)
    )
}
