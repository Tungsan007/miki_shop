import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function status() {
  const { query } = useRouter();
  useEffect(() => {
    console.log(query)
  }, [query])
  return (
    <div>status</div>
  )
}
