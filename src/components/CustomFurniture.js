import React from 'react'
import {GiMissilePod}  from "react-icons/gi"
import {GiNightVision}  from "react-icons/gi"
import {AiOutlineHistory}  from "react-icons/ai"

const CustomFurniture = () => {
  return (
    <div className='main-div-margins c-main'>
        <div className='flex-custom div-center-80 grid-17 c-front'>
           <h2>custom furniturebuilt only for you</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
        </div>

        <div className='div-center-80 grid-17'>
            <div className='c-box'>
                <div className='c-icon-main'>
                <GiMissilePod className='c-icon'/>
                </div>
                <h4>Mission</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
            </div>
            <div className='c-box'>
            <div className='c-icon-main'>
                <GiNightVision className='c-icon div-center'/>
            </div>
                <h4>Vission</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
            </div>
            <div className='c-box'>
            <div className='c-icon-main'>
                <AiOutlineHistory className='c-icon'/>
            </div>
                <h4>History</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
            </div>
         </div>
    </div>
  )
}

export default CustomFurniture
