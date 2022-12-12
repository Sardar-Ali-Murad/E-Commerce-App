import React from 'react'
import { useAppContext } from '../context/appContext'
import FormRowSelect from './FormRowSelect'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormRow from './FormRow';
import {TiTickOutline}  from "react-icons/ti"

const Filters = () => {
    let {category,color,company,freeShipping,handleChange,start,products,handleCheck,search,sort,price,clear}=useAppContext()
    React.useEffect(()=>{
       start()
    },[])

    const [colorOption, setColorOption] = React.useState('');


      let categoryArr=["All",...new Set(products.map((all)=>all?.category))]
      let companyArr=["All",...new Set(products.map((all)=>all?.company))]
      let Colors=[]
      let colorsArr=[...new Set(products?.map((all)=>all?.colors?.map((c)=>Colors=[...Colors,c])))]
      Colors=["All",...new Set(Colors)]

    let  SortArr=["Sort","price (Lowest)","price (highest)","name(a-z)","name(z-a)"]

    let pri=products.map((all)=>Number(all?.price)).sort((a,b)=>a-b)
    // console.log(pri)

    

    function handleInputs(e){
         handleChange(e.target.name,e.target.value)
    }

    function handleRadio(e){
        handleCheck(e.target.name,e.target.checked)
    }

    function colorHandler(col){
      setColorOption(col)
    }

    function cle(){
      clear()
      setColorOption("")
    }

    React.useEffect(()=>{
      handleChange("color",colorOption)
    },[colorOption])
  return (
    <div>

    <div className='grid-12 div-center-80 main-div-margins'>
       <FormRow labelText="Search By Name"  name="search" handleChange={handleInputs} value={search} className='dark form-input'/>
        <FormRowSelect  value={category} list={categoryArr} labelText="Category" name="category" handleChange={handleInputs} />
        <FormRowSelect  value={company} list={companyArr} labelText="Company" name="company" handleChange={handleInputs} />
        {/* <FormRowSelect  value={color} list={Colors} labelText="Colors" name="color" handleChange={handleInputs} /> */}

        {/*  */}
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                  <h4 style={{marginTop:"10px",marginTop:"20px"}}>Color:</h4>
                  <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                  {
                      Colors?.map((all)=>{
                          return(
                              <div>
                                 <div className='color' onClick={()=>colorHandler(all)} style={{background:all,height:"40px",width:"40px",borderRadius:"50%"}}><TiTickOutline className={`tick ${colorOption===all?"activeTick":""}`} /></div>          
                            </div>
                              )
                        })
                    }
                 </div>
               </div>
        {/*  */}
    
        <FormControlLabel  control={<Checkbox />} value={freeShipping}  label="Free Shipping" name="freeShipping" onChange={handleRadio} />

        <FormRowSelect value={sort}  labelText="Sort"  handleChange={handleInputs} name="sort" list={SortArr}/>

        <FormRow max={pri[pri.length-1]} min={pri[0]} type="range" labelText={`Price $${price}`} name="price" handleChange={handleInputs} value={price}/>

        <button style={{height:"40px",width:"120px",marginTop:"30px",background:"red"}} className='btn roboto' onClick={cle}>Clear</button>

        
    </div>
    </div>
  )
}

export default Filters
