import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { GetProducts } from '../redux/slices/ProductSlice'
import ProductList from '../Components/ProductList'
import Panier from '../Components/Panier'
const Home = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(GetProducts())
  },[])
  const {isLoading,error,products} = useSelector(state=> state.products)
 
  return (
    <div>
    
    {isLoading && <h1>isLoading</h1>}
    <ProductList products={products}/>
    {console.log(error)}
    <Panier/>
    </div>
  )
}

export default Home
