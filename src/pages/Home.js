import React from 'react'
import {HomeFront,CustomFurniture,NewsLetter,Footer,Featured} from "../components/index"

const Home = () => {
  return (
    <div>
      <HomeFront/>
      <Featured/>
      <CustomFurniture/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
