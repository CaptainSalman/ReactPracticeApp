import React, { useEffect, useState } from 'react'

const ProductList = ({ category }: { category: string }) => {

   const [products, setProducts] = useState<string[]>([])

   useEffect(() => {

    // Fetch products from an API or other source
    console.log('Fetching products in', category)
    setProducts(['Product 1', 'Product 2', 'Product 3'])

   }, [category])
  return (
    <div>
        Product List for {category}
    </div>
  )

}

export default ProductList