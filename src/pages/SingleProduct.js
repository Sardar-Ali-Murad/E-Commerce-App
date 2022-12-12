import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Rating from '@mui/material/Rating';
import {TiTickOutline}  from "react-icons/ti"
import {AiOutlineMinus}  from "react-icons/ai"
import {AiOutlinePlus}  from "react-icons/ai"
import { Footer } from '../components';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';

const SingleProduct = () => {
    let {start,addProduct,cart,showAlert,AlertFun}=useAppContext()
    let {id}=useParams()
    let {products}=useAppContext()
    let product=products.find((all)=>all?.id===id)
  const [color, setColor] = React.useState(product.colors[0]);
  const [count,setCount]=React.useState(1)

  React.useEffect(()=>{
    start()
  },[])

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

  function cartHandler(){
    let AlreadyPresent=cart.find((all)=>all?.id===id)
    if(AlreadyPresent){
      AlertFun({type:"danger",msg:"This product is already present in the cart"})
    }
    else{
       let obj={...product,quantity:count,selectedColor:color}
       addProduct(obj)
         AlertFun({type:"success",msg:"The Product is added successfully in the cart"})
      }
  }

  

    
  return (
    <div>

  <div className='grid-22 div-center-80 main-div-margins' style={{overflowWrap:"hidden"}}>
    {/* The Image Section starts  */}
        <div className='p-img'>
               <div>
                  <img style={{height:"80%",width:"100%"}} src={product?.image}/>
               </div>
               <div >
                  {showAlert && <Alert/>}
               </div>
               <div style={{display:"flex",gap:"30px",alignItems:"center"}}>
                  <h1 style={{marginTop:"10px"}}>Color:</h1>
                  <div style={{display:"flex",gap:"30px"}}>
                  {
                      product?.colors?.map((all)=>{
                          return(
                              <div>
                                 <div className='color' onClick={()=>setColor(all)} style={{background:all,height:"40px",width:"40px",borderRadius:"50%"}}><TiTickOutline className={`tick ${color===all?"activeTick":""}`} onClick={()=>setColor(all)}/></div>          
                            </div>
                              )
                        })
                    }
                 </div>
               </div>

               <div>
                  <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
                       <AiOutlineMinus className='minus' onClick={minus}/>
                       <h1>{count}</h1>
                       <AiOutlinePlus className='plus' onClick={plus}/>
                  </div>
                  {/* <Link to="/cart"> */}
                     <button className='shop-btn dark btn' onClick={cartHandler}>Add To Cart</button>
                  {/* </Link> */}
               </div>
        </div>
    {/* The Image Section ends  */}
     {/* The Content starts */}
        <div>
            <h3>{product?.name}</h3>
            <div style={{display:"flex",gap:"30px",marginTop:'30px',alignItems:"center",marginBottom:"30px"}}>
               <Rating name="size-large" defaultValue={2} size="large" />
                <p>(20 customers reviews)</p>
            </div>
            <h5 style={{color:'brown'}}>${product?.price}</h5>
             <p>{product?.description}</p>
             <div style={{display:'flex',justifyContent:"space-between",marginTop:'30px'}}>
                <h3>Available:</h3>
                <p>InStock</p>
             </div>
             <div style={{display:'flex',justifyContent:"space-between"}}>
               <h3>SKU:</h3>
               <p>{product?.id}</p>
             </div>
             <div style={{display:"flex",justifyContent:"space-between"}}>
                <h3>Brand:</h3>
                <p>{product?.company}</p>
             </div>
             <div className='line'></div>
        </div>

        {/* The Content Section Ends */}
    </div>
        <Footer/>
    </div>
  )
}

export default SingleProduct
