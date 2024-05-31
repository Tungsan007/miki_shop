import React from 'react'
import MainLayout from 'src/layouts'
import Checkout from 'src/sections/checkout/index'

Payment.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default function Payment() {
    return (
        <div>
            <Checkout /> 
        </div>
    )
}
