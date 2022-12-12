import React from 'react'
import { Footer } from '../components'
import {Filters,FilteredProducts}  from "../components/index"

const Products = () => {

  return (
    <div>
     <Filters/>
     <FilteredProducts/>
      <Footer/>
    </div>
  )
}

export default Products
