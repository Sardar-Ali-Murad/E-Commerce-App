import React from 'react'
import Pic2 from "../utils/img/2.jpg"
import Footer from "../components/Footer"

const About = () => {
  return (
    <div>

    <div className='div-center-80 grid-22 main-div-margins'>
      <img src={Pic2} style={{height:'100%',width:'100%'}}/>
      <div>
        <h2>our story</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste</p>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About
