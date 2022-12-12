
import { EggTwoTone } from '@mui/icons-material'
import { act } from 'react-dom/test-utils'
import {
   HANDLE_CHANGE,
   HANDLE_CHECK,ALL_PRODUCTS,
   FILTERED_PRODUCTS,
   CLEAR_FILTERS,ADD_PRODUCT,
   UPDATE_CART,
   DELETE_CART,
   CLEAR_CART,
   CALL_ALERT,
   CLEAR_ALERT
} from './actions'

const reducer = (state, action) => {
  if(action.type===HANDLE_CHANGE){
    return {
      ...state,
      [action.payload.name]:action.payload.value
    }
   }

   if(action.type===HANDLE_CHECK){
    return {
      ...state,
      [action.payload.name]:action.payload.value
    }
   }

   if(action.type===ALL_PRODUCTS){
    return{
      ...state,
      products:action.payload.data
    }
   }

   if(action.type===FILTERED_PRODUCTS){
    // console.log(action.payload.data)
    return{
      ...state,
      filteredProducts:action.payload.data
    }
   }

   if(action.type===CLEAR_FILTERS){
    return{
      ...state,
      filteredProducts:state.products,
      search:"",
      category:"",
      company:"",
      color:"",
      freeShipping:false,
      sort:"",
      price:3099
    }
   }

   if(action.type===ADD_PRODUCT){
    return{
      ...state,
      cart:[...state.cart,action.payload.data]
    }
   }

   if(action.type===UPDATE_CART){
    return{
      ...state,
      cart:state.cart.map((all)=>all?.id===action.payload.id?{...all,quantity:action.payload.quantity}:all)
    }
   }

   if(action.type===DELETE_CART){
    return{
      ...state,
      cart:state.cart.filter((all)=>all?.id!==action.payload.id)
    }
   }

   if(action.type===CLEAR_CART){
    return{
      ...state,
      cart:[]
    }
   }

   if(action.type===CALL_ALERT){
    return{
      ...state,
      showAlert:true,
      alertType:action.payload.type,
      alertText:action.payload.msg
    }
   }

   if(action.type===CLEAR_ALERT){
    return{
      ...state,
      showAlert:false,
      alertType:"",
      alertText:""
    }
   }


  throw new Error(`no such action : ${action.type}`)
}

export default reducer
