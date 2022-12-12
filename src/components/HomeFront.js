import React from 'react'
import Pic1 from "../utils/img/1.jpg"
import Pic2 from "../utils/img/2.jpg"
import Pic3 from "../utils/img/3.jpg"

const HomeFront = () => {
  return (
    <div className='main-div-margins grid-even-2 div-center-80 home-front-main'>
       <div className='content'>
           <h1>design your <span>comfort zone</span></h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
           <button className='shop-btn dark btn'>Shop Now</button>
       </div>

       <div className='images'>
          <img src={Pic1} className="img-1"/>
          <img src={Pic2} className="img-2"/>
          <img src={Pic3} className="img-3"/>
       </div>
    </div>
  )
}

export default HomeFront
