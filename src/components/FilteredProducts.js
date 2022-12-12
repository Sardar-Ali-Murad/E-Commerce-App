import { Filter } from '@mui/icons-material'
import React from 'react'
import { useAppContext } from '../context/appContext'
import {BsSearch}  from "react-icons/bs"
import { Link } from 'react-router-dom'


const FilteredProducts = () => {
    let {start,filteredProducts,search}=useAppContext()

    React.useEffect(()=>{
     start()
    },[])

    if(filteredProducts.length===0){
        return <h2 className='text-center main-div-margins'>Soory There is no such product that match your criteria...</h2>
    }


  return (
    <div className='grid-18 div-center-80 main-div-margins'>
      {
        filteredProducts?.filter((all)=>all?.name.toUpperCase().includes(search.toUpperCase())).map((product)=>{
            return     <div>
            <div className='f-single-card'>
                <div className='f-img-main' >
                  <img style={{objectFit:"cover"}} src={product?.image}/>
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
        })
      }
    </div>
  )
}

export default FilteredProducts
