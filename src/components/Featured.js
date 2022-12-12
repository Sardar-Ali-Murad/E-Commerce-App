import React from 'react'
import { useAppContext } from '../context/appContext'
import {BsSearch}  from "react-icons/bs"
import { Link } from 'react-router-dom'

const Featured = () => {
    let {products}=useAppContext()
    let featuredProducts=products.filter((all)=>all?.featured===true)
    console.log(featuredProducts)
  return (
    <div className='div-center-80 '>
       <h1 className='text-center'>Featured Products</h1>
       <div className='grid-15'>
          {
            featuredProducts?.slice(0,3).map((product)=>{
                return (

                  <div>
                <div className='f-single-card'>
                    <div className='f-img-main' >
                      <img src={product?.image}/>
                      <Link to={`/product/${product?.id}`}>
                         <BsSearch className='search div-perfect-center'/>
                      </Link>
                    </div>
                    <div className='f-overlay'></div>
                </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                        <p className='dark'>{product?.name}</p>
                        <p style={{color:"brown"}}>${product?.price}</p>
                    </div>
                </div>
                )

            })
          }
       </div>
    </div>
  )
}

export default Featured
