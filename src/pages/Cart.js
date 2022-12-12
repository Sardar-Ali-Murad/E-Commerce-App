import React from 'react'
import {CartItems,PriceCarrd}  from "../components/index"
import { useAppContext } from '../context/appContext'
import { Link } from 'react-router-dom'

const Cart = () => {

  let {cart}=useAppContext()

  if(cart.length===0){
    return(
        <div className='div-perfect-center main-div-margins'>
        <h1>Your Cart Is Empty </h1>
        <Link to="/products" style={{color:"black"}} className="text-center">
           <button className='shop-btn dark btn text-center' style={{marginLeft:"50%",transform:"translateX(-50%)"}}>Fill No</button>
        </Link>
    </div> 
        )
}
  return (
    <div>
      <CartItems/>
      <PriceCarrd/>
    </div>
  )
}

export default Cart
