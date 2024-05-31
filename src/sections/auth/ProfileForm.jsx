import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Button from 'src/components/Button';
import { dataUser } from 'src/recoils/dataUser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import axios from 'axios';



const schema = yup.object().shape({
    firstName: '',
    lastName: '',
    email: yup
        .string()
        .required('*Vui lòng nhập email hoặc số điện thoại của bạn')
        .matches(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/, '*It is not an email or phone number'),
    dateOfBirth: yup
        .date()
        .nullable()
        .transform((curr, orig) => (orig === '' ? null : curr))
        .required('*Bắt buộc'),

    password: yup.string().required('*Vui lòng nhập lại mật khẩu của bạn').min(6),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});


const ProfileForm = ({ setIsOpen }) => {
    const router = useRouter();
    const user = useRecoilValue(dataUser);
    const [errorState, setError] = useState('');



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const test = (e) => {
        e.stopPropagation()
    };


    const updateDataUser = async (data) => {

        axios.put('/api/auth/login', {
            data
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
        console.log(data);

    };
    return (
        <>
            {

                <div
                    onClick={() => setIsOpen()}
                    className='z-50  w-full h-full fixed top-0 left-0 flex justify-center items-center'>
                    <form
                        onClick={test}
                        onSubmit={handleSubmit(updateDataUser)}
                        className="p-5 bg-primary_4 rounded-lg"
                    >
                        <h4 className="font-bold text-xl leading-7 text-black">Cập nhật thông tin tài khoản</h4>
                        <div className="flex gap-3 mt-8">
                            {/* FirstName */}
                            <div
                                className="w-[129px]
                 "
                            >
                                <input
                                    type="text"
                                    {...register('firstName')}
                                    placeholder={user.firstName}
                                    className="rounded-lg border-solid
                  border
                  border-primary_1
                  w-full
                  h-[48px]
                  font-main
                  font-medium
                  text-base
                  leading-6
                  tracking-[-0.019rem]
                  text-neutral_3
                  pl-4
                  "
                                />
                                <p className="text-[#D2311B] text-base font-medium h-5 mb-2">
                                    {errors.firstName?.message}
                                </p>
                            </div>

                            {/* LastName */}
                            <div className="w-[129px]">
                                <input
                                    type="text"
                                    {...register('lastName')}
                                    placeholder={user.lastName}
                                    className="rounded-lg border-solid
                  border
                  border-primary_1
                  w-[129px]
                  h-[48px]
                  font-main
                  font-medium
                  text-base
                  leading-6
                  tracking-[-0.019rem]
                  text-neutral_3
                  pl-4
                  "
                                />
                                <p className="text-[#D2311B] text-base font-medium h-5 mb-2 ">
                                    {errors?.lastName?.message}
                                </p>
                            </div>

                            {/* DateOfBirth */}
                            <div className="w-[129px]">
                                <input
                                    type="date"
                                    {...register('dateOfBirth')}
                                    placeholder="Năm sinh"
                                    className="rounded-lg border-solid
                  border
                  border-primary_1
                  w-full
                  h-[48px]
                  font-main
                  font-medium
                  text-base
                  leading-6
                  tracking-[-0.019rem]
                  text-neutral_3
                  pl-4
                  uppercase
                  "
                                />
                                <p className="mb-2 text-[#D2311B] text-base font-medium h-5">
                                    {errors.dateOfBirth?.message}
                                </p>
                            </div>
                        </div>

                        {/*email*/}
                        <div className="py-3 pt-2">
                            <input
                                type="text"
                                {...register('email')}
                                placeholder={user.email}
                                className="rounded-lg border-solid
                    border
                    border-primary_1
                    w-full
                    h-[48px]
                    font-main
                    font-medium
                    text-base
                    leading-6
                    tracking-[-0.019rem]
                    text-neutral_3
                    pl-4
                    "
                            />
                            <p className="text-[#D2311B] text-base font-medium h-5">
                                {errors.email?.message || errorState}
                            </p>
                        </div>
                        {/*phone*/}
                        <div className="py-3 pt-2">
                            <input
                                type="text"
                                {...register('phone')}
                                placeholder={user?.phone ? user.phone : 'thêm số điện thoại của bạn'}
                                className="rounded-lg border-solid
                    border
                    border-primary_1
                    w-full
                    h-[48px]
                    font-main
                    font-medium
                    text-base
                    leading-6
                    tracking-[-0.019rem]
                    text-neutral_3
                    pl-4
                    "
                            />
                            <p className="text-[#D2311B] text-base font-medium h-5">
                                {errors.email?.message || errorState}
                            </p>
                        </div>
                        {/* Password */}
                        <div className="py-1">
                            <input
                                type="password"
                                {...register('password')}
                                placeholder="Nhập mật khẩu mới từ 6-8 kí tự"
                                className="rounded-lg border-solid
                    border
                    border-primary_1
                    w-full
                    h-[48px]
                    font-main
                    font-medium
                    text-base
                    leading-6
                    tracking-[-0.019rem]
                    text-neutral_3
                    pl-4
                    "
                            />
                            <p className="text-[#D2311B] text-base font-medium h-5 ">{errors?.password?.message}</p>
                        </div>
                        {/* Password confirm */}
                        <div className="py-1">
                            <input
                                type="password"
                                {...register('confirmPassword')}
                                placeholder="Xác thực lại mật khẩu mới"
                                className="rounded-lg border-solid
                    border
                    border-primary_1
                    w-full
                    h-[48px]
                    font-main
                    font-medium
                    text-base
                    leading-6
                    tracking-[-0.019rem]
                    text-neutral_3
                    pl-4
                    "
                            />
                            <p className="text-[#D2311B] text-base font-medium h-5 mb-2">
                                {errors?.confirmPassword && '*Xác nhận mật khẩu không đúng'}
                            </p>
                        </div>

                        <Button
                            type="submit"
                            title="Cập nhật"
                            className="mt-3 bg-black py-2 px-[46px] w-full h-10 rounded-btnB 
              font-bold text-base font-main leading-6 text-center tracking-[0.15px] text-white
              hover:bg-[#0000] 
              hover:text-neutral_1
              hover:border-solid hover:border-[1px] hover:border-[#000]
              "
                        />
                    </form>
                </div>

            }
        </>
    )

}

export default ProfileForm;