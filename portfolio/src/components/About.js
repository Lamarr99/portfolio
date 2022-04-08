import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket , faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const About = () => {
  return (
      <div  id='about' className=' about-page '>
    <div className='container text-center  text-dark '>
<h1 className='about-me mb-3 mx-auto text-uppercase fw-bold '>About Me</h1>
<div className='row'>
  <div className='col'>
<div>
<div className='hexagon text-center'><FontAwesomeIcon icon={ faLaptopCode } style={{color:"red"}}  /> </div>
  <h4>Responsive</h4>
  <p>My layouts will work on any device, big or small.</p>
</div>

  </div>

  <div className='col'>
<div>
  <div className='hexagon '><FontAwesomeIcon className='' /></div>
  <h4>Intuitive</h4>
  <p>Strong preference for easy to use,intuitive UX/UI</p>
</div>

</div>
<div className='col'>
<div>
<div className='hexagon '></div>
  <h4>Dynamic</h4>
  <p>Websites don't have to be static, I love making pages come to life.</p>
</div>

  </div>

  <div className='col'>
<div>
<div className='hexagon '></div>
  <h4>Fast</h4>
  <p>Fast load times and lag free interaction, my highest priority.</p>
</div>

</div>
</div>
<p className='about-para mx-auto contact-paragraph text-center text-dark'>Hello👋! i'm  a Frontend web developer based out of lagos,Nigeria. 
    From bartending in a club to lines of code on a web page, I love combining the worlds of logic 
    and creative design to make eye catching, accessible, and user-friendly websites and applications

Technology leads,society follows. The move towards increasing inclusivity and diversity in the industry 
through 
representation is of importance to me.

I'm excited to make the leap and continue refining my skills with the right company. Drop me a line 
and/or your favorite 
restaurant in lagos in the contact form below or check me out at :</p>

    </div>
    </div>
  )
}

export default About