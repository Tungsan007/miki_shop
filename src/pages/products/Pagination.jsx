import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ datas, pageCount, setPage }) {
    const data = datas

    const [currentItems, setCurrentItems] = useState(null)


    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    }

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                //className for CSS
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="pre-page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>)
}

export default Pagination;