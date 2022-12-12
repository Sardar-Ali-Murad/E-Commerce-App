import React from 'react'
import {BsCart}  from "react-icons/bs"
import {BsFillPersonPlusFill}  from "react-icons/bs"
import { Link } from 'react-router-dom'
import "./index.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross}  from "react-icons/im"
import { useAppContext } from '../context/appContext'

const Navbar = () => {
    let {cart} =useAppContext()
    let [ham,setHam]=React.useState(true)

    let num=cart.reduce((final,current)=>{
        final+=current?.quantity
        return final
    },0)

  

  return (
    <div>
   {/* Big Screen Nav Start*/}
    <div className='nav-main'>
        <div className='nav-headers'>
             <h3>comfy sloth</h3>
        </div>

    <div className='big-screen-nav'>
       <nav>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/products">Product</Link></li>
        </ul>
       </nav>
    </div> 
          

         <div className='nav-end'>
            <Link to="/cart" style={{color:"black"}}>
            <div className='nav-flex cart-rel'>
                <h3>Cart</h3>
                 <BsCart className='nav-icon'/>
                 <h2 className='cart-no'>{num}</h2>
            </div>
            </Link>
            <div className='nav-flex '>
                <h3>Login</h3>
                 <BsFillPersonPlusFill className='nav-icon'/>
            </div>
        </div> 

        <div>
            <GiHamburgerMenu className='ham' onClick={()=>setHam(false)}/>
        </div>
 
    {/* End of the big screen nav */}
    </div>
    {/* small screen nav starts */}
      <div className={`small-screen-main ${!ham?"small-screen-nav-active":""}`}>
         <div className='small-nav-front'>
            <h3>comfy Sloth</h3>
            <ImCross className='cross' onClick={()=>setHam(true)}/>
         </div>

         <div className='small-screen-nav-center div-center-80'>
            <li> <Link style={{marginBottom:"30px"}} to="/" onClick={()=>setHam(true)}>Home</Link></li>
            <li> <Link to="/about"  style={{marginBottom:"30px"}} onClick={()=>setHam(true)}>About</Link></li>
            <li> <Link to="/products"   style={{marginBottom:"30px",listStyle:"none"}} onClick={()=>setHam(true)}>Product</Link></li>     
         </div>

         <div className='small-nav-end'>
            <Link to="/cart" style={{color:"black"}} onClick={()=>setHam(true)}>
            <div className='nav-flex cart-rel'>
                <h3>Cart</h3> 
                 <BsCart className='nav-icon'/>
                 <h2 className='cart-no'>{num}</h2>
            </div>
            </Link>
            <div className='nav-flex'>
                <h3>Login</h3>
                 <BsFillPersonPlusFill className='nav-icon'/>
            </div>
        </div> 


    </div> 
    {/* small screen nav  ends*/}

    </div>
  )
}

export default Navbar
