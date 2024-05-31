import React from 'react'
import CartMain from 'src/sections/cart/index'
import MainLayout from 'src/layouts/index'

Cart.getLayout = (page) => <MainLayout>{page}</MainLayout>


export default function Cart() {
    return (
        <div>
            <CartMain />
        </div>
    )
}
