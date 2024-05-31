import React from 'react'

export default function Console() {
    return (
        <div className='p-[20px]'>
            <div className='text-2xl'>Bảng điều khiển</div>
            <div className='grid grid-cols-4 gap-8 py-4'>
                <div className='border-l-[4px] rounded-[5px] border-blue-300 h-24 flex items-center shadow-[0px_-10px_30px_-10px_rgba(0,0,0,0.3)]'>
                    <div className='ml-3 font-bold'>
                        <p className='text-blue-300 '>DOANH THU THÁNG</p>
                        <h3>225.000đ</h3>
                    </div>
                </div>
                <div className='border-l-[4px] rounded-[5px] border-green-300 h-24 flex items-center shadow-[0px_-10px_30px_-10px_rgba(0,0,0,0.3)]'>
                    <div className='ml-3 font-bold'>
                        <p className='text-green-300 '>DOANH THU NĂM</p>
                        <h3>225.000đ</h3>
                    </div>
                </div>
                <div className='border-l-[4px] rounded-[5px] border-[#35bcc8] h-24 flex items-center shadow-[0px_-10px_30px_-10px_rgba(0,0,0,0.3)]'>
                    <div className='ml-3 font-bold'>
                        <p className='text-[#35bcc8]'>DOANH SỐ</p>
                        <h3>225.000đ</h3>
                    </div>
                </div>
                <div className='border-l-[4px] rounded-[5px] border-orange-400 h-24 flex items-center shadow-[0px_-10px_30px_-10px_rgba(0,0,0,0.3)]'>
                    <div className='ml-3 font-bold'>
                        <p className='text-orange-400 '>SẢN PHẨM</p>
                        <h3>225.000đ</h3>
                    </div>
                </div>
            </div>
            <div className='shadow-[0px_-10px_30px_-10px_rgba(0,0,0,0.3)] text-white mt-5'>
                <p className='text-[#4e73de] font-bold p-[15px] border-b-[1px] border-[#ccc]'>Việc cần làm</p>
                <div className='p-[30px] grid grid-cols-4 gap-8'>
                    <div className='text-center bg-[#4e73de] h-[80px]'>
                        <p className='mt-[15px]'>1</p>
                        <p>Chờ xác nhận</p>
                    </div>
                    <div className='text-center bg-[#858796] h-[80px]'>
                        <p className='mt-[15px]'>1</p>
                        <p>Đang giao</p>
                    </div>
                    <div className='text-center bg-[#1cc88a] h-[80px]'>
                        <p className='mt-[15px]'>1</p>
                        <p>Đã giao</p>
                    </div>
                    <div className='text-center bg-[#e74a3b] h-[80px]'>
                        <p className='mt-[15px]'>1</p>
                        <p>Đã hủy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
