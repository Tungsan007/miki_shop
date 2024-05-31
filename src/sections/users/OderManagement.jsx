import React from 'react';
import Button from 'src/components/Button';

function OderManagement({ tab, setTab }) {

    return (
        <div>
            <ul className="flex mx-[152px]  text-center bg-white text-black text-base font-bold mb-8">
                <li
                    onClick={() => setTab(1)}

                    className={tab === 1 ? 'flex-1 h-[55px] items-center flex justify-center cursor-pointer bg-primary_4' : 'flex-1 h-[55px] items-center flex justify-center cursor-pointer text-neutral_2'}>
                    Tất cả đơn
                </li>
                <li
                    onClick={() => setTab(2)}
                    className={tab === 2 ? 'flex-1 h-[55px] items-center flex justify-center cursor-pointer bg-primary_4' : 'flex-1 h-[55px] items-center flex justify-center cursor-pointer text-neutral_2'}>
                    Đang xử lý
                </li>
                <li
                    onClick={() => setTab(3)}

                    className={tab === 3 ? 'flex-1 h-[55px] items-center flex justify-center cursor-pointer bg-primary_4' : 'flex-1 h-[55px] items-center flex justify-center cursor-pointer text-neutral_2'}>
                    Đang vận chuyển
                </li>
                <li
                    onClick={() => setTab(4)}

                    className={tab === 4 ? 'flex-1 h-[55px] items-center flex justify-center cursor-pointer bg-primary_4' : 'flex-1 h-[55px] items-center flex justify-center cursor-pointer text-neutral_2'}>
                    Đã hoàn thành
                </li>

            </ul>

            <div className='text-[14px] mx-[152px] mb-[38px] font-medium h-10 leading-[22px] relative'>
                <input className='w-full pl-14  rounded-lg py-[9px]' type="text" placeholder="Nhẫn trơn" />
                <img className='w-6 h-6 absolute top-2 left-4' src='/assets/icon/Search.png' alt='SearchIcon' />
                <div className=' absolute right-6 top-[5px] cursor-pointer flex items-center'>
                    <p className='w-[1px] h-[29px] bg-black mr-6 '></p>
                    Tìm đơn hàng
                </div>
            </div>


            {/* sản phẩm 1 */}
            <div className='w-1440px h-[596px] bg-white z-10 relative mb-[40px]' >
                <div className='px-[196px] pt-8'>
                    <p className='font-bold text-xl text-neutral_2 mb-6 '>Mã đơn hàng: 167495</p>
                    <div className='flex justify-between'>
                        <div className='flex '>
                            <div className='w-[120px] h-[120px] text-center border-solid
                                border-[1px]
                                border-primary_2
                                flex
                                justify-center
                                items-center
                                relative'>
                                <img className=' w-[100px] h-[100px] 
                                '
                                    src='/assets/images/product1.png'
                                    alt=''

                                />
                                <p className='
                                rounded-tl-[4px]
                                font-medium text-sm text-neutral_5
                                w-[22px] h-[22px]
                                absolute right-0 bottom-0 bg-primary_2
                                '>x1</p>
                            </div>
                            <div className='ml-10'>
                                <h3 className='font-main font-bold
                                text-xl text-neutral_1
                                '>Lira Earrings</h3>
                                <p className='font-main font-medium text-sm mt-2 '>Màu sắc: Gold</p>

                            </div>
                        </div>
                        <div className='text-right text-xl text-primary_2 font-bold '>
                            <h3>355.000đ</h3>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-primary_5 my-4'></div>


                    <div className='flex justify-between'>
                        <div className='flex '>
                            <div className='w-[120px] h-[120px] text-center border-solid
                                border-[1px]
                                border-primary_2
                                flex
                                justify-center
                                items-center
                                relative'>
                                <img className=' w-[100px] h-[100px] 
                                '
                                    src='/assets/images/product1.png'
                                    alt=''

                                />
                                <p className='
                                rounded-tl-[4px]
                                font-medium text-sm text-neutral_5
                                w-[22px] h-[22px]
                                absolute right-0 bottom-0 bg-primary_2
                                '>x1</p>
                            </div>
                            <div className='ml-10'>
                                <h3 className='font-main font-bold
                                text-xl text-neutral_1
                                '>Hana Earrings</h3>
                                <p className='font-main font-medium text-sm mt-2 '>
                                    Màu sắc: Silver
                                </p>

                            </div>
                        </div>
                        <div className='text-right text-xl text-primary_2 font-bold '>
                            <h3>355.000đ</h3>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-primary_5 my-4'></div>


                    <div className='flex text-right justify-end items-center cursor-pointer'>
                        <h3 className='font-main font-bold text-base tracking-[0.15px] text-[#251C17]'>
                            Xem thêm 2 sản phẩm
                        </h3>
                        <img className=' w-4 h-4 ml-4' src='/assets/icon/doubleArrowdown.png' />
                    </div>

                    <div className='flex text-right justify-end items-center cursor-pointer mt-12'>
                        <h3 className='font-main font-bold text-xl tracking-[0.15px] text-[#251C17]'>
                            Tổng tiền :
                        </h3>
                        <h3 className="ml-6 font-bold text-xl text-primary_2 ">
                            1.250.000đ
                        </h3>
                    </div>

                    <div className='flex text-right justify-end items-center cursor-pointer mt-12'>
                        <Button title='Mua lại'
                            className='font-bold text-[#251C17] text-base tracking-[0.15px]
                        rounded-btnB w-[104px] h-10
                        border-[1px]
                        border-solid
                        border-black
                        cursor-pointer
                        ' />

                        <Button title='Xem chi tiết'
                            className='font-bold text-[#251C17] text-base tracking-[0.15px]
                        rounded-btnB w-[135px] h-10
                        border-[1px]
                        border-solid
                        border-black
                        cursor-pointer
                        ml-4
                        ' />

                    </div>
                </div>
            </div>

            {/* Sản phẩm 2 */}
            <div className='w-1440px h-[596px] bg-white z-10 relative mb-[120px]' >
                <div className='px-[196px] pt-8'>
                    <p className='font-bold text-xl text-neutral_3 mb-6 '>Mã đơn hàng: 167495</p>
                    <div className='flex justify-between'>
                        <div className='flex '>
                            <div className='w-[120px] h-[120px] text-center border-solid
                                border-[1px]
                                border-primary_2
                                flex
                                justify-center
                                items-center
                                relative'>
                                <img className=' w-[100px] h-[100px] 
                                '
                                    src='/assets/images/product1.png'
                                    alt=''

                                />
                                <p className='
                                rounded-tl-[4px]
                                font-medium text-sm text-neutral_5
                                w-[22px] h-[22px]
                                absolute right-0 bottom-0 bg-primary_2
                                '>x1</p>
                            </div>
                            <div className='ml-10'>
                                <h3 className='font-main font-bold
                                text-xl text-neutral_1
                                '>Lira Earrings</h3>
                                <p className='font-main font-medium text-sm mt-2 '>Màu sắc: Gold</p>

                            </div>
                        </div>
                        <div className='text-right text-xl text-primary_2 font-bold '>
                            <h3>355.000đ</h3>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-primary_5 my-4'></div>


                    <div className='flex justify-between'>
                        <div className='flex '>
                            <div className='w-[120px] h-[120px] text-center border-solid
                                border-[1px]
                                border-primary_2
                                flex
                                justify-center
                                items-center
                                relative'>
                                <img className=' w-[100px] h-[100px] 
                                '
                                    src='/assets/images/product1.png'
                                    alt=''

                                />
                                <p className='
                                rounded-tl-[4px]
                                font-medium text-sm text-neutral_5
                                w-[22px] h-[22px]
                                absolute right-0 bottom-0 bg-primary_2
                                '>x1</p>
                            </div>
                            <div className='ml-10'>
                                <h3 className='font-main font-bold
                                text-xl text-neutral_1
                                '>Hana Earrings</h3>
                                <p className='font-main font-medium text-sm mt-2 '>
                                    Màu sắc: Silver
                                </p>

                            </div>
                        </div>
                        <div className='text-right text-xl text-primary_2 font-bold '>
                            <h3>355.000đ</h3>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-primary_5 my-4'></div>


                    <div className='flex text-right justify-end items-center cursor-pointer'>
                        <h3 className='font-main font-bold text-base tracking-[0.15px] text-[#251C17]'>
                            Xem thêm 2 sản phẩm
                        </h3>
                        <img className=' w-4 h-4 ml-4' src='/assets/icon/doubleArrowdown.png' />
                    </div>

                    <div className='flex text-right justify-end items-center cursor-pointer mt-12'>
                        <h3 className='font-main font-bold text-xl tracking-[0.15px] text-[#251C17]'>
                            Tổng tiền :
                        </h3>
                        <h3 className="ml-6 font-bold text-xl text-primary_2 ">
                            1.250.000đ
                        </h3>
                    </div>

                    <div className='flex text-right justify-end items-center cursor-pointer mt-12'>
                        <Button title='Mua lại'
                            className='font-bold text-[#251C17] text-base tracking-[0.15px]
                        rounded-btnB w-[104px] h-10
                        border-[1px]
                        border-solid
                        border-black
                        cursor-pointer
                        ' />

                        <Button title='Xem chi tiết'
                            className='font-bold text-[#251C17] text-base tracking-[0.15px]
                        rounded-btnB w-[135px] h-10
                        border-[1px]
                        border-solid
                        border-black
                        cursor-pointer
                        ml-4
                        ' />

                    </div>
                </div>
            </div>


            {/* bg-circle */}
            <div
                className="rounded-full bg-circle1 w-[177px] h-[177px] 
                    absolute
                    top-[2348px]
                    left-[-89px]
                      -z-10
                    "
            ></div>
            <div
                className="rounded-full bg-circle2 w-[221px] h-[221px] 
                    absolute
                    top-[2326px]
                    left-[-111px]
                    -z-10
                    
                    "
            ></div>

            {/* bg-circle */}
            <div
                className="rounded-full bg-circle1 w-[180px] h-[180px]  
                    absolute
                    top-[565px]
                    left-[1349px]
                    -z-10
                    
                    "
            ></div>
            <div
                className="rounded-full bg-circle2 w-[225px] h-[225px] 
                    absolute
                    top-[543px]
                    left-[1327px]
                    -z-10
                    
                    "
            ></div>

            {/* bg-circle */}
            <div
                className="rounded-full bg-circle1 w-[441px] h-[441px]  
                    absolute
                    top-[3196px]
                    left-[-111px]
                    -z-10

                    "
            ></div>
            <div
                className="rounded-full bg-circle2 w-[551px] h-[551px] 
                    absolute
                    top-[3141px]
                    left-[-166px]
                    -z-10
                    "
            ></div>
        </div >
    );
}

export default OderManagement;