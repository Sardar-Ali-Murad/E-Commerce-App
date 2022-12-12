import { AtmOutlined } from '@mui/icons-material'
import React from 'react'
import {AiOutlineMinus}  from "react-icons/ai"
import {AiOutlinePlus}  from "react-icons/ai"
import {FcDeleteColumn}  from "react-icons/fc"
import { useAppContext } from '../context/appContext'

const CartItem = ({all}) => {
    let {updateCart,delCart}=useAppContext()
    const [count,setCount]=React.useState(all?.quantity)
    function minus(){
        let num=count-1
        if(num<1){
           setCount(count)
        }
        else{
           setCount((pre)=>pre-1)
        }
     }
   
     function plus(){
       let num=count+1
       if(num>10){
          setCount(count)
       }
       else{
          setCount((pre)=>pre+1)
       }
     }

    React.useEffect(()=>{
      updateCart(all.id,count)
    },[count])

  return (
    <div style={{display:"flex"}}>

        <div className='grid-even-3' style={{marginBottom:"100px",width:"100%"}}>

            <div className='cart-flex'>

                 <div style={{display:"flex",gap:"30px"}}>
                    <img style={{height:"50px",width:"50px",borderRadius:"50%"}} className='cart-img' src={all?.image}/>
                    <div>
                        <h7 className="roboto" style={{margin:"0px"}}>{all?.name}</h7>
                        <div  style={{display:"flex",gap:"5px"}}><p>Color:</p>  <div className='color'style={{background:all?.selectedColor,height:"20px",width:"20px",borderRadius:"50%",marginTop:"5px"}}></div></div>
                    </div>
                 </div>

                 <p style={{color:"brown",margin:"0px"}}>${all?.price}</p>

            </div>
                 <div style={{display:"flex",gap:"30px"}}>
                       <AiOutlineMinus className='minus' onClick={minus} style={{fontSize:'20px'}}/>
                       <h4>{count}</h4>
                       <AiOutlinePlus className='plus' onClick={plus} style={{fontSize:'20px'}}/>
                  </div>

                  <h5>${all?.price * all?.quantity}</h5>
                  {/* <div className='line' style={{width:"100%"}}></div> */}
            </div>
                  <FcDeleteColumn onClick={()=>delCart(all?.id)} style={{fontSize:'30px',cursor:"pointer"}}/>
    </div>
  )

}

export default CartItem
