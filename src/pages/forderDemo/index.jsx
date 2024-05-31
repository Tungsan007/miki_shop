import axios from 'axios'
import Link from 'next/link'
import React from 'react'

// export const getStaticProps = async () => {
//    const res = await axios({method: 'GET',url: 'https://jsonplaceholder.typicode.com/users' })
//    const allUser = res.data
//    return {
//       props: { allUser, }
//    }
// }
export const getStaticProps = async () => {
   const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/products/getAllProducts'
   })
   const products = res.data.products
   return {
      props: { products }
   }
}
// export async function getStaticProps() {
//    // Call an external API endpoint to get posts
//    const res = await fetch('https://jsonplaceholder.typicode.com/users')
//    const posts = await res.json()
 
//    // By returning { props: { posts } }, the Blog component
//    // will receive `posts` as a prop at build time
//    return {
//      props: {
//        posts,
//      },
//    }
//  }
export default function Homepage({ products }) {
   console.log(products)
   
   return (
      <>
         <div>
            {products.map(pro => {
               return (
                  <Link href={`/forderDemo/${pro._id}`}>
                     <li>{pro.name}</li>
                  </Link>
               )
            })}
         </div>
      </>
   )
}
