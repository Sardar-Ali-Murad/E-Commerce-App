import React from 'react'
import { useAppContext } from '../context/appContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartItems = () => {
    let {cart,clearCart}=useAppContext()

   
  
  return (
    <div className='main-div-margins' >

    <div className='div-center-80  cart-main' >
        <div className='grid-even-3 cart-head'>
            <p>Item</p>
            <p>Quantity</p>
            <p>SubTotal</p>
        </div>
        <div className='line' style={{marginTop:"10px",marginBottom:"30px"}}></div>
      {
          cart?.map((all)=>{
            return <CartItem all={all}/>
        })
      }
      
    </div>

    <div style={{display:"flex",justifyContent:"space-between"}} className="div-center-80 btns-main">
        <Link to="/products">
           <button className='shop-btn dark btn'>Continue Shopping</button>
        </Link>
        <button className='shop-btn dark btn' onClick={()=>clearCart()}>Clear Shopping Card</button>
    </div>
            </div>
  )
}

export default CartItems
