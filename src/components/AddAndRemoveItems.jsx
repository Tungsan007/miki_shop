import axios from 'axios';
import React from 'react';
import { PlusIcon, MinusIcon } from './icons/Icons_2'


export default function AddAndRemoveItems(props) {
  const { product, index, itemState, setItemState } = props
  const handleAddProduct = async (indexofPro, method) => {
    setItemState((prev) =>
      prev.map((pro, index) => {
        if (index == indexofPro) {
          let quantity = itemState[indexofPro].quantity
          if (method == 'remove') {
            pro = { ...itemState[indexofPro], quantity: itemState[indexofPro].quantity - 1 };
            quantity -= 1;
          }
          else {
            pro = { ...itemState[indexofPro], quantity: itemState[indexofPro].quantity + 1 };
            ++quantity;
          }
          handleModifyQuantityApi(itemState[indexofPro]._id, quantity)
        }
        return pro;
      }),
    );
  };

  const handleModifyQuantityApi = async (_id, quantity) => {
    const res = await axios({
      method: 'POST',
      url: '/api/cart/updateCart',
      data: { cartId: _id, quantity: quantity },
    })
    return console.log(res.data)
  }

  return (
    <div className="flex items-center justify-between w-[104px] h-8">
      <button
        disabled={product.quantity == 1}
        onClick={() => handleAddProduct(index, 'remove')}
        className="w-[32px] h-[32px] rounded-full flex justify-center items-center font-bold cursor-pointer active:bg-black active:text-[#D4BBAA]"
      >
        <MinusIcon className="w-6 h-6 active:text-white" />
      </button>
      <p className="font-bold text-[20px] leading-[28px]">{product.quantity}</p>
      <div
        onClick={() => handleAddProduct(index, 'add')}
        className="w-[32px] h-[32px] rounded-full flex justify-center items-center font-bold cursor-pointer active:bg-black active:text-[#D4BBAA]"
      >
        <PlusIcon className={'active:text-white w-8 h-8'} />
      </div>
    </div>
  )
}
