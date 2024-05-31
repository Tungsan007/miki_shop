import axios from 'axios'
import React from 'react'

// export const getStaticPaths = async () => {
//    const res = await axios({
//       method: 'GET',
//       url: 'https://jsonplaceholder.typicode.com/users'
//    })
//    const allUser = res.data
//    const paths = allUser?.map(user => ({
//       params: { id: user.id.toString()}
//    }))
//    return {
//       paths,
//       fallback: false
//    }
// }

// // export async function getStaticPaths() {
// //    const res = await fetch('https://jsonplaceholder.typicode.com/users')
// //    const users = await res.json()
 
// //    const paths = users?.map((user) => ({
// //      params: { id: user.id.toString() },
// //    }))
// //    return { paths, fallback: false }
// //  }
// //  // This also gets called at build time
// //  export async function getStaticProps({ params }) {
// //    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
// //    const user = await res.json()
 
// //    return { props: { user } }
// //  }
// export const getStaticProps = async ({ params }) => {
//    console.log(params)
//    const res = await axios({
//       method: 'GET',
//       url: `https://jsonplaceholder.typicode.com/users/${params.id}`
//    })
//    const user = res.data
//    return {
//       props: { user }
//    }
// }

export const getStaticPaths = async () => {
  const res = await axios({
    method: 'GET',
    url: 'http://localhost:3000/api/products/getAllProducts'
  })
  const products = res.data.products
  const paths = products?.map(product => ({
    params: {id: product._id.toString()}
  }))
  return { paths, fallback: false}
}

export const getStaticProps = async ({ params }) => {
  const res = await axios({
    method: 'GET',
    url: `http://localhost:3000/api/products/${params.id}`
  })
  const product = res.data
  return { props: { product }}
}

export default function DetailPage({ product }) {
  return (
    <div>
      <h1>{product.product?.name}</h1>
    </div>
  )
}
