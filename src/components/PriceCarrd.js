import React from 'react'
import { useAppContext } from '../context/appContext'

const PriceCarrd = () => {
    let {cart}=useAppContext()
    let SubTotal=cart.reduce((final,initial)=>{
        final+=initial.quantity * initial.price
       return final
    },0)

    let ShippingFee=5.29
    let OrderTotal=SubTotal + ShippingFee
  return (
    <div className='bill-main div-center-50'>
      <div className='bill-card'>

        <div className='bill-flex'>
           <h3>SubTotal: </h3>
           <h3>${SubTotal}</h3>
        </div>

        <div className='bill-flex'>
            <p className='dark'>ShippingFee :</p>
            <p className='dark'>${ShippingFee}</p>
        </div>

        <div className='line'></div>

        <div className='bill-flex'>
            <h3>Order Total :</h3>
            <h3>${OrderTotal}</h3>
        </div>
      </div>
    </div>
  )
}

export default PriceCarrd
