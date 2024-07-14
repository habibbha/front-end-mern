import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductPanierCard from './ProductPanierCard'
import { CreateOrder } from '../redux/slices/OrderSlice'
const Panier = () => {
    const dispatch=useDispatch()
    const {products} = useSelector(state=> state.panier)

  return (
    <div>
      {
        products.map((el)=> <ProductPanierCard product={el}/> )
      }
      <button onClick={()=>dispatch(CreateOrder({productList:products}))}>Add All order</button>
    </div>
  )
}

export default Panier
