import React from 'react'
import MainAdLayout from './mainAdLayout'
import Page from 'src/components/Page';
import { useState } from 'react'
import Pagination from './Products/Pagination'
import { useForm } from 'react-hook-form'
import { data } from 'autoprefixer';

MgnUser.getLayout = (page) => <MainAdLayout>{page}</MainAdLayout>

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { users: data },
    };
}


export default function MgnUser({ users }) {

    const { register, handleSubmit } = useForm();

    const onSubmit = ((data) => {
        console.log(data);
    })

    const [pagination, setPagination] = useState(
        {
            _page: 1,
            _limit: 10,
            _totalRows: 22,
        }
    );

    const [page, setPage] = useState(1);

    const handlePageChange = (newpage) => {
        setPage(newpage);
    }

    const [option, setOption] = useState('');
    console.log(option)
    const [Users, setUsers] = useState(users);

    const [checkPro, setCheckPro] = useState([]);
    console.log(checkPro);
    const handleChangeCheckPro = (e) => {
        const id = e.target.id;
        setCheckPro(prev => prev?.includes(id) ? prev?.filter(item => item != id) : [...prev, id])
    }

    const handleApplyOptions = () => {
        if (option == 'Xóa') {
            const newUsers = users.filter((item) => {
                return !checkPro.includes(item.id.toString());
            });
            setUsers(newUsers);
            console.log('newUsers is :', newUsers);
        }
    }

    return (
        <div className=''>
            <div className='m-5 bg-white'>
                <Page
                    data={{
                        title: 'Miki Shop Admin manager User',
                        description: '',
                        url: '',
                        thumbnailUrl: '',
                    }}
                />
                <div className='p-3 font-bold text-blue-300 border-b-[1px] border-solid border-[#ccc]'>Sản phẩm</div>
                <select name="" id=""
                    className='p-1 rounded-md border-[1px] border-gray-600 ml-3'
                    onChange={
                        (e) => {
                            setOption(e.target.value);
                        }
                    }
                >
                    <option value="--Hành Động--">--Hành Động--</option>
                    <option className='p-6 ml-2' value="Xóa">Xóa</option>
                </select>
                <button
                    className='p-1 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 ml-3'
                    onClick={handleApplyOptions}
                >Áp dụng</button>
                <table className='m-3'>
                    <tbody>
                        <tr>
                            <th className='p-3 border-[1px] border-gray-500'></th>
                            <th className='p-3 border-[1px] border-gray-500'>ID</th>
                            <th className='p-3 border-[1px] border-gray-500'>Tên</th>
                            <th className='p-3 border-[1px] border-gray-500'>Thể loại</th>
                            <th className='p-3 border-[1px] border-gray-500'>Giá</th>
                            <th className='p-3 border-[1px] border-gray-500'>Role</th>
                            <th className='p-3 border-[1px] border-gray-500 w-[500px]'>Màu sắc</th>
                            <th className='p-3 border-[1px] border-gray-500'>Size</th>
                            <th className='p-3 border-[1px] border-gray-500'>Đã bán</th>
                        </tr>
                        {
                            Users?.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td className='p-3 border-[1px] border-gray-500'>
                                            <input
                                                type="checkbox"
                                                id={user.id}
                                                onChange={
                                                    handleChangeCheckPro
                                                } />
                                        </td>
                                        <td className='p-3 border-[1px] border-gray-500'>{user.id}</td>
                                        <td className='p-3 border-[1px] border-gray-500'>{user.id}</td>
                                        <td className='p-3 border-[1px] border-gray-500'>{user.name}</td>
                                        <td className='p-3 border-[1px] border-gray-500'>{user.name}</td>
                                        <td className='p-3 border-[1px] border-gray-500'>
                                            <select>
                                                <option value="Admin">Admin</option>
                                                <option value="User">User</option>
                                            </select>
                                        </td>
                                        <td className='p-3 border-[1px] border-gray-500'>{user.name}</td>
                                        <td className='p-3 border-[1px] border-gray-500'>1</td>
                                        <td className='p-3 border-[1px] border-gray-500'>Đã bán</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mr-20 pb-14'>
                <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}
