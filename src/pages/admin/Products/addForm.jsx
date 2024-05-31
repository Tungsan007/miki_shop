import React, { useState, useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Page from 'src/components/Page';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatSearchString } from 'src/utils/formatString';


const amountSchema = yup.object().shape({
    quantity: yup.string().required("*Required"),
    cost: yup.number().required("*Cost is required").typeError("Cost is required"),
    color: yup.array().min(1, "Color is required").typeError("Color is required"),
})

const schema = yup.object().shape({
    name: yup.string().required("*Name is require"),
    picture: yup.array().compact().min(1, "*Picture is required").nullable(),
    sale: yup.number().required("*Sale is required").typeError("*Sale is required"),
    desc: yup.string().required("*Description is required"),
    amount: yup.array().min(1, "Size is required").of(
        amountSchema
    ),
    category: yup.string().required("Category is required")
})

export default function AddForm({ currentPro, setCurrentPro, setUpdate }) {


    const { register, handleSubmit, control, setValue, reset, clearErrors, watch, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema),
            defaultValues: {
                name: currentPro.data.name,
                category: currentPro.data.category,
                amount: currentPro.data.amount,
                sale: currentPro.data.sale,
                desc: currentPro.data.desc,
            }
        },
    );

    const {
        fields: size_field,
        append: appendSize,
        remove: removeSize,
    } = useFieldArray(
        {
            control,
            name: "amount",
        },
    );

    useEffect(() => {
        size_field.length > 0 && clearErrors('amount')
    }, [size_field])

    console.log(currentPro);

    const onSubmit = async (data) => {
        console.log('Data is..', data)
        if (idPic.filter((id) => id != undefined).length != 0) {
            const resDelte = await axios({
                method: 'POST',
                url: '/api/image/delete',
                data: { files: idPic }
            });
            console.log('Resdata is...', resDelte.data);
        }
        if (currentPro.isEdit) {
            console.log('Data is', { ...data, id: currentPro.data._id });
            var mpic = mainPicture
            if (typeof mpic == 'string') {
                const resPic = await axios({
                    method: 'POST',
                    url: '/api/image/upload',
                    data: { file: mpic }
                })
                mpic = resPic?.data;
            }
            const picCvCloud = pictures.filter((pic) => typeof pic == 'object');
            const picNoneCvCloud = pictures.filter((pic) => typeof pic == 'string');
            const resPic = await axios({
                method: 'POST',
                url: '/api/image/upload',
                data: { files: picNoneCvCloud }
            });
            console.log(picCvCloud, picNoneCvCloud);
            console.log(resPic?.data?.result);
            //setPictures([...picCvCloud, ...resPic?.data?.result]);
            const resData = await axios({
                method: 'POST',
                url: '/api/products/update',
                data: { ...data, picture: [mpic, ...picCvCloud, ...resPic?.data?.result], id: currentPro.data._id }
            });
            setUpdate((prev) => !prev);
        } else {
            console.log('Data add is..', data);
            const resPic = await axios({
                method: 'POST',
                url: '/api/image/upload',
                data: { files: [mainPicture, ...pictures] }
            })
            const mainPic = resPic.data.result?.[0];
            const subPic = resPic.data.result?.filter((pic, index) => index != 0)
            console.log([mainPic, ...subPic]);
            const resData = await axios({
                method: 'POST',
                url: '/api/products/create',
                data: { ...data, picture: [mainPic, ...subPic], search: formatSearchString([data.name]) }
            })
            console.log(resData);
            // setProducts((prev) => {
            //     return [...prev, resData.data];
            // })
            setUpdate((prev) => !prev);
            setMainPicture('');
            setPictures([]);
            reset()
        }
    }

    function getBase64(file, location) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function () {
            if (location == 'main') {
                const picMainConvertB64 = reader.result
                //console.log('PicmainConvertBase64 is ', picMainConvertB64);
                setChangePic(true);
                setMainPicture(picMainConvertB64);
            }
            else {

                const picConvertB64 = reader.result
                // console.log('PicSubConvertBase64 is ', picConvertB64);
                setPictures(
                    (prev) => [...prev, picConvertB64]
                )
                setChangePic(true);
            }
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    //handle of picture 
    const [mainPicture, setMainPicture] = useState(currentPro.data.picture?.[0] || '');
    const [pictures, setPictures] = useState(currentPro.data.picture?.filter((picture, index) => {
        return index !== 0;
    }) || []);
    console.log('main pic is', mainPicture);
    console.log('sub pic is', pictures);
    const [idPic, setIdPic] = useState([]);
    const [changePic, setChangePic] = useState(false);
    const [validate, setValidate] = useState(0);



    console.log('idPic is', idPic);
    // console.log('mainPic is', mainPicture, 'subPic is', pictures);
    const handleDeleteMain = () => {
        (idPic.includes(currentPro.data.picture?.[0]?._id) ? null : setIdPic((prev) => [...prev, currentPro.data.picture?.[0]._id]))
        console.log(idPic);
        setMainPicture([]);
    }

    const handleChangeMainPicture = (link) => {
        getBase64(link, 'main');
    }
    const handleChangePicture = (e) => {
        const file = e.target.files[0];
        getBase64(file, 'sub');
        e.target.value = null;
    }
    const handleDelete = (indexDelete) => {
        (idPic.includes(currentPro.data.picture?.[indexDelete + 1]?._id) ? null : setIdPic((prev) => [...prev, currentPro.data.picture?.[indexDelete + 1]?._id]));
        setPictures((prev) => {
            const newListPic = prev.filter((picture, index) => {
                return index !== indexDelete;
            });
            return newListPic;
        })
    }


    const notify = (edit) => {
        (
            (validate > 0 || watch('name'))
            &&
            (
                errors
                && Object.keys(errors).length === 0
                && Object.getPrototypeOf(errors) === Object.prototype
            )
            &&
            (toast.success(edit ? "Edit success" : "Add success", {
                position: toast.POSITION.TOP_RIGHT
            }))
        )
    }

    return (
        <div
            className='fixed flex top-0 bottom-0 left-0 right-0 bg-[#00000099]'
            onClick={
                () => setCurrentPro(prev => ({ ...prev, modalOpen: false }))
            }
        >
            {/* start add */}
            <div className='p-5 w-[60%] mx-auto h-[500px]' onClick={
                (e) => e.stopPropagation()
            }>
                <Page
                    data={{
                        title: 'Add Product',
                        description: '',
                        url: '',
                        thumbnailUrl: '',
                    }}
                />
                <div className='flex items-center bg-white'>
                    <button
                        className='p-2 font-bold text-blue-400 border-blue-400 border-solid rounded-lg hover:opacity-80'
                        onClick={
                            () => setCurrentPro(prev => ({ ...prev, modalOpen: false }))
                        }
                    >Quay lại</button>
                </div>
                <form
                    onSubmit={
                        handleSubmit(onSubmit)
                    }
                    className='bg-white '>
                    <div className='font-bold text-blue-400 bg-[#ccd1e3] px-4 h-11 leading-10 border-b-[1px] border-gray-400'>
                    </div>
                    <div className='p-4 overflow-y-scroll h-[500px]'>
                        <div className='grid grid-cols-12 rounded-md border-[1px] border-solid border-[#ccc]'>
                            <div className='bg-[#e7edf1] col-span-2 w-[130px] text-sm p-2'>Tên sản phẩm</div>
                            <input className='col-span-10 leading-9'
                                type='text'
                                name="name"
                                {...register("name")}
                            />
                        </div>
                        <p className="text-[#D2311B] text-base font-medium h-5">
                            {errors.name?.message}
                        </p>
                        {/* Category */}
                        <div>
                            {/* {...register("category")} */}
                            {/* className='p-2 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 mr-2' */}
                            <p className='my-3 text-xl font-bold'>Thể loại</p>
                            <select className='p-2 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 mr-2'  {...register("category")} placeholder='Size'>
                                <option value="dây chuyền">dây chuyền</option>
                                <option value="nhẫn">nhẫn</option>
                                <option value="lắc">lắc</option>
                                <option value="bông tai">bông tai</option>
                            </select>
                        </div>
                        <p className="text-[#D2311B] text-base font-medium h-5">
                            {errors.category?.message}
                        </p>
                        {/* Ảnh */}

                        <div className='text-[#333] my-3 text-xl font-bold'>Ảnh Chính</div>
                        <div className='inline-block  ml-[19px] relative'>
                            <input id='mainpic'
                                className='hidden'
                                type="file"
                                {...register("picture", {
                                    onChange: (e) => {
                                        handleChangeMainPicture(e.target.files[0]);
                                    }
                                })}
                            />
                            <label htmlFor='mainpic' className='absolute top-0 bottom-0 left-0 right-0'></label>
                            <img src={mainPicture.url || mainPicture} alt="ADD PICTURE" className='w-[150px] h-[150px] object-contain object-center border-dashed border-blue-500 border-[2px]' />
                        </div>
                        <div
                            className='mt-2 mr-[978px] text-center text-blue-500 cursor-pointer hover:opacity-60 ml-7'
                            onClick={
                                () => {
                                    handleDeleteMain()
                                }
                            }
                        >Xóa</div>

                        <p className="text-[#D2311B] text-base font-medium h-5">
                            {errors.picture?.message}
                        </p>

                        <div className='text-[#333] my-3 text-xl font-bold'>Ảnh Phụ</div>
                        <div className='flex flex-wrap items-center'>
                            {
                                pictures?.map((picture, index) => {
                                    return (
                                        <div key={picture._id || index} className='w-[150px] mx-4'>
                                            <img src={picture.url || picture} alt="ADD PICTURE" className='w-[150px] h-[150px] object-contain object-center border-dashed border-blue-500 border-[2px]' />
                                            <div
                                                className='mt-2 text-center text-blue-500 cursor-pointer hover:opacity-60'
                                                onClick={
                                                    () => {
                                                        handleDelete(index)
                                                    }
                                                }
                                            >Xóa</div>
                                        </div>
                                    )
                                })
                            }
                            {
                                (pictures.length < 3 &&
                                    (<label className='p-3 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 ml-3 cursor-pointer'>
                                        <input
                                            type="file"
                                            onChange={
                                                handleChangePicture
                                            }
                                            className='hidden' />
                                        Add Picture
                                    </label>)
                                )
                            }
                        </div>
                        {/* SIZE */}
                        <div>
                            <p className='text-[#333] my-3 text-xl font-bold'>Size</p>
                            <button type='button'
                                className='ml-4 p-2 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 mb-5'
                                onClick={
                                    () => {
                                        appendSize({})
                                    }
                                }>Add Size</button>
                            <div className='ml-4'>
                                {
                                    size_field?.map(({ id }, index) => {
                                        return (
                                            <div className='p-3 my-4 drop-shadow-xl border-[1px] border-blue-400' key={id}>
                                                <div>
                                                    <p className='my-3 text-xl font-bold text-blue-400'>Size</p>
                                                    <select className='p-2 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 mb-5 mr-2' {...register(`amount[${index}].size`)} placeholder='Size'>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <p className='my-3 text-xl font-bold text-blue-400'>Số lượng</p>
                                                    <input className='p-2 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 mr-2' type="text" {...register(`amount[${index}].quantity`)} placeholder='Quantity' />
                                                </div>
                                                <p className="text-[#D2311B] mb-5 text-base font-medium h-5">

                                                    {errors.amount?.[index]?.quantity?.message}

                                                </p>
                                                <div>
                                                    <p className='my-3 text-xl font-bold text-blue-400'>Màu sắc</p>
                                                    <div className='flex justify-around ml-4'>
                                                        <div>
                                                            <div className='inline-block w-[20px] h-[20px] bg-white border-[#333] mx-2 border-[1px] '></div>
                                                            <input type="checkbox" {...register(`amount[${index}].color`)} value='white' />
                                                        </div>
                                                        <div>
                                                            <div className='inline-block w-[20px] h-[20px] bg-gray-500 border-[#333] mx-2 border-[1px] '></div>
                                                            <input type="checkbox" {...register(`amount[${index}].color`)} value='gray' />
                                                        </div>
                                                        <div>
                                                            <div className='inline-block w-[20px] h-[20px] bg-yellow-300 border-[#333] mx-2 border-[1px] '></div>
                                                            <input type="checkbox" {...register(`amount[${index}].color`)} value='gold' />
                                                        </div>
                                                    </div>
                                                    <p className="text-[#D2311B] text-base font-medium h-5">

                                                        {errors.amount?.[index]?.color?.message}

                                                    </p>
                                                </div>
                                                <div>
                                                    <p className='my-3 text-xl font-bold text-blue-400'>Giá bán</p>
                                                    <input className='p-2 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 mr-2' type="number" onWheelCapture={e => { e.currentTarget.blur() }} {...register(`amount[${index}].cost`)} placeholder='Cost' />
                                                </div>
                                                <p className="text-[#D2311B] mb-5 text-base font-medium h-5">

                                                    {errors.amount?.[index]?.cost?.message}

                                                </p>
                                                <button className='p-2 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 mb-5' type='button' onClick={
                                                    () => {
                                                        removeSize(index);
                                                    }
                                                }>Remove Size</button>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <p className="text-[#D2311B] text-base font-medium h-5">
                                {errors.amount?.message}
                            </p>
                        </div>
                        <div>
                            <div className='grid grid-cols-12 rounded-md border-[1px] border-solid border-[#ccc] my-2'>
                                <div className='bg-[#e7edf1] col-span-1 text-sm p-2'>Sale</div>
                                <input
                                    type="number"
                                    className='col-span-11 pl-2 leading-9'
                                    {...register("sale")}
                                    onWheelCapture={e => { e.currentTarget.blur() }}
                                />
                            </div>
                            <p className="text-[#D2311B] text-base font-medium h-5">
                                {errors.sale?.message}
                            </p>
                        </div>
                        <div>
                            <p className='text-[#333] my-3 text-xl font-bold'>Mô tả</p>
                            <textarea rows={'10'} {...register("desc")} className='w-[100%] border-[1px] border-gray-500'>
                            </textarea>
                        </div>
                        <p className="text-[#D2311B] text-base font-medium h-5">
                            {errors.desc?.message}
                        </p>
                    </div>
                    <div className='text-center bg-white'>
                        <button
                            className='p-2 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg font-bold hover:opacity-80 mb-5'
                            onClick={
                                () => {
                                    setValue("picture", (
                                        (idPic.length == 0 && currentPro.isEdit == true && changePic == false) ? currentPro.data.picture : [mainPicture, ...pictures]
                                    ))
                                    setValidate(validate + 1);
                                    notify(currentPro.isEdit);
                                }
                            }
                        >{currentPro.isEdit ? "Cập nhật" : "Thêm mới"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
