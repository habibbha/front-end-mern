import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div style={{display:"flex"}}>
      {products.map((el)=> <ProductCard product={el}/>)}
    </div>
  )
}

export default ProductList
