import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Button from 'src/components/Button';
import { dataUser } from 'src/recoils/dataUser';
import ProfileForm from '../auth/ProfileForm';

function InfoUser() {
    const [isOpen, setIsOpen] = useState(false);

    const user = useRecoilValue(dataUser)


    const toggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <div>
            <div className='flex px-[152px]'>

                {/* Info user */}
                <div className='flex-1'>
                    <div className='font-bold text-xl tracking-[-0.019em] text-black pb-11'>
                        <h3>
                            Thông tin cá nhân :
                        </h3>
                    </div>
                    <div className='flex gap-10 pb-10'>
                        <div className='flex-1 align text-right text-black font-bold'>
                            <p className='pb-12'>Họ và tên</p>
                            <p className='pb-12'>Giới tính</p>
                            <p className=''>Ngày sinh</p>
                        </div>
                        <div className='flex-[2_2_0%] align text-left text-black font-medium'>
                            <p className='pb-12'>{user?.firstName + ' ' + user?.lastName}</p>
                            <div className='flex pb-12'>
                                <div className='flex'>
                                    <input id='feMale' className='w-6 radio-sex ' name="fav_language" type='radio' value='Nữ' />
                                    <label htmlFor='feMale' className='pl-4'>Nữ</label>
                                </div>
                                <div className='flex pl-8'>
                                    <input id='male' className='w-6 radio-sex' name="fav_language" type='radio' value='Nam' />
                                    <label htmlFor='male' className='pl-4'>Nam</label>
                                </div>
                                <div className='flex pl-8'>
                                    <input id='other' className='w-6 radio-sex' name="fav_language" type='radio' value='Khác' />
                                    <label htmlFor='other' className='pl-4'>Khác</label>
                                </div>
                            </div>
                            <p>04/03/2002</p>
                        </div>
                    </div>


                </div>


                {/* Phone and security */}
                <div className='flex-1'>
                    <div className='font-bold text-xl tracking-[-0.019em] text-black pb-11'>
                        <h3>
                            Điện thoại và bảo mật:
                        </h3>
                    </div>
                    <div className='flex gap-10 pb-10'>
                        <div className='flex-1 align text-right text-black font-bold'>
                            <p className='pb-12'>Số điện thoại</p>
                            <p className='pb-12'>Email</p>
                            <p className=''>Mật khẩu</p>
                        </div>
                        <div className='flex-[2_2_0%] align text-left text-black font-medium'>
                            <p className='pb-12'>0912345678</p>
                            <p className='pb-12'>{user?.email}</p>

                            <p>123!@#$%</p>
                        </div>
                    </div>



                </div>




            </div>
            <div className='text-right pb-[120px] px-[152px]'>
                <Button

                    title="Cập nhật"
                    className=" bg-black py-2  w-[170px] h-10 rounded-btnB 
                font-bold text-base font-main leading-6 text-center tracking-[0.15px] text-white
                hover:bg-[#0000] 
                hover:text-neutral_1
                hover:border-solid
                 hover:border-[1px]
                  hover:border-[#000]
                "
                    onClick={() => toggle()}
                />
            </div>

            {isOpen ? <ProfileForm setIsOpen={() => setIsOpen(!isOpen)} /> : null}

            {/* bg-circle */}
            <div
                className="rounded-full bg-circle1 w-[177px] h-[177px] 
                    absolute
                    top-[1048px]
                    left-[-82px]
                    z-10
                    "
            ></div>
            <div
                className="rounded-full bg-circle2 w-[221px] h-[221px] 
                    absolute
                    top-[1026px]
                    left-[-104px]
                    z-10
                    "
            ></div>

            {/* bg-circle */}
            <div
                className="rounded-full bg-circle1 w-[180px] h-[180px]  
                    absolute
                    top-[1835px]
                    left-[1363px]
                    z-10
                    "
            ></div>
            <div
                className="rounded-full bg-circle2 w-[225px] h-[225px] 
                    absolute
                    top-[1812px]
                    left-[1341px]
                    z-10
                    "
            ></div>

            {/* bg-circle */}
            <div
                className="rounded-full bg-circle1 w-[441px] h-[441px]  
                    absolute
                    top-[2103px]
                    left-[-48px]
                    -z-10

                    "
            ></div>
            <div
                className="rounded-full bg-circle2 w-[551px] h-[551px] 
                    absolute
                    top-[2048px]
                    left-[-103px]
                    -z-10
                    "
            ></div>
        </div>
    );
}

export default InfoUser;