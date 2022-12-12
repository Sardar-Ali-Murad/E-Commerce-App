import React from "react";
import { Navbar,Footer } from "./components";
import { Home,About,SingleProduct,Products ,Cart} from "./pages/index"
import {BrowserRouter,Route,Routes}  from "react-router-dom"
function App() {
  return (
    <div style={{overflow:"hidden"}}>
    <BrowserRouter>
       <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/product/:id" element={<SingleProduct/>}/>
           <Route path="/products" element={<Products/>}/>
           <Route path="/cart"  element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
