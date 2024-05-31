import React from 'react'
import PropTypes from 'prop-types'

SortProductsAd.propTypes = {
  setSortOption: PropTypes.func,
  productSort: PropTypes.func,
  setPage: PropTypes.func,
};

function SortProductsAd(props) {

  const { setSortOption, productSort, setPage } = props;

  return (
    <div>
      <select name="" id=""
        className='p-1 rounded-md border-[1px] border-gray-600 ml-3 mr-14'
        onChange={
          (e) => {
            e.target.value != 'new' ? setSortOption(e.target.value) : productSort((prev) => [...prev].reverse())
            setPage(1);
          }
        }
      >
        <option value="--Hành Động--">--Sắp xếp theo--</option>
        <option className='p-6 ml-2' value="">Mặc định</option>
        <option className='p-6 ml-2' value="name=asc">A-Z</option>
        <option className='p-6 ml-2' value="name=desc">Z-A</option>
        <option className='p-6 ml-2' value="cost=asc">Giá tăng dần</option>
        <option className='p-6 ml-2' value="cost=desc">Giá giảm dần</option>
        <option className='p-6 ml-2' value="sale=desc">Sản phẩm ưu đãi</option>
        <option className='p-6 ml-2' value="new">Sản phẩm mới</option>
      </select>
    </div>
  )
}


export default SortProductsAd