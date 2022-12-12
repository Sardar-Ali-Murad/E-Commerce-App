import React, { useReducer, useContext } from 'react'

import reducer from './reducer'



import {
  HANDLE_CHANGE,
  HANDLE_CHECK,
  ALL_PRODUCTS,
  FILTERED_PRODUCTS,
  CLEAR_FILTERS,ADD_PRODUCT,
  UPDATE_CART,
  DELETE_CART,
  CLEAR_CART,
  CALL_ALERT,
  CLEAR_ALERT
} from './actions'

// let local=JSON.parse(localStorage.getItem("cart"))

const initialState = {
  products:[],
  filteredProducts:[],
  search:"",
  category:"",
  company:"",
  color:"",
  freeShipping:false,
  sort:"",
  price:3099,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  alertType:"",
  alertText:"",
  showAlert:false
}


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
   
  function handleChange(name,value){
    dispatch({type:HANDLE_CHANGE,payload:{name:name,value:value}})
  }

  function handleCheck(name,checked){
    console.log(name,checked)
    dispatch({type:HANDLE_CHECK,payload:{name:name,value:checked}})
  }

  let start=async ()=>{
    let initial=await fetch("https://course-api.com/react-store-products")
    let final=await initial.json()
    dispatch({type:ALL_PRODUCTS,payload:{data:final}})
  }

  React.useEffect(()=>{
    start()
  },[])


  React.useEffect(()=>{
    let FilteredProducts=state.products
    let {search,category,company,color,freeShipping,sort,price}=state
    if(category && category!=="All"){
      FilteredProducts=FilteredProducts.filter((product)=>product?.category===category)
   }

   if(company && company!=="All"){
     FilteredProducts=FilteredProducts.filter((product)=>product?.company===company)
   }

   if(color && color!=="All"){
     FilteredProducts=FilteredProducts.filter((product)=>product?.colors.includes(color))
   }
   
   if(price){
     FilteredProducts=FilteredProducts.filter((all)=>all?.price>=Number(price))
   }

   if(freeShipping){
     FilteredProducts=FilteredProducts.filter((product)=>product?.shipping===true)
   }

   
   if(sort && sort==="price (Lowest)"){
          FilteredProducts=FilteredProducts.sort((a,b)=>a.price - b.price)
     }

   if(sort && sort==="price (highest)"){
     FilteredProducts=FilteredProducts.sort((a,b)=>b.price - a.price)
   }
   if(sort && sort==="name(a-z)"){
     FilteredProducts=FilteredProducts.sort(function (a, b) {
         if (a.name < b.name) {
           return -1;
         }
         if (a.name > b.name) {
           return 1;
          }
          return 0;
       });
       
      }
      if(sort && sort==="name(z-a)"){
        FilteredProducts=FilteredProducts.sort(function (a, b) {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
       });
      }

      dispatch({type:FILTERED_PRODUCTS,payload:{data:FilteredProducts}})
      
    },[state.search,state.category,state.company,state.color,state.freeShipping,state.sort,state.price,state.products])


    function clear(){
      dispatch({type:CLEAR_FILTERS})
    }


    function addProduct(data){
      dispatch({type:ADD_PRODUCT,payload:{data:data}})
    }
    

    function updateCart(id,quantity){
      dispatch({type:UPDATE_CART,payload:{id:id,quantity:quantity}})
    }

   function delCart(id){
      dispatch({type:DELETE_CART,payload:{id:id}})
    }
   function clearCart(){
    dispatch({type:CLEAR_CART})
   }

   function AlertFun({type,msg}){
    dispatch({type:CALL_ALERT,payload:{type:type,msg:msg}})

    setTimeout(()=>{
       dispatch({type:CLEAR_ALERT})
    },3000)
   }


   React.useEffect(()=>{
     localStorage.setItem("cart",JSON.stringify(state.cart))
   },[state.cart])
    
   
  return (
    <AppContext.Provider
    value={{
      ...state,
      handleChange,
      handleCheck,
      start,
      clear,
      addProduct,
      updateCart,
      delCart,
      clearCart,
      AlertFun
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
