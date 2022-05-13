import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLightbulb,  } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const About = () => {
  return (
      <div  id='about' className=' about-page '>
    <div className='container text-center  text-dark '>
<h1 className='about-me mb-3 mt-3  mx-auto text-uppercase fw-bold '>About Me</h1>
<div className='row'>
  <div className='col d-block'>

  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M38.1,-30.9C53.3,-22.9,72.1,-11.5,71.8,-0.3C71.4,10.8,51.9,21.6,36.7,35.9C21.6,50.3,10.8,68.2,-0.8,69C-12.3,69.7,-24.7,53.4,-36.3,39C-48,24.7,-58.9,12.3,-62.3,-3.3C-65.6,-19,-61.3,-38,-49.7,-45.9C-38,-53.9,-19,-50.7,-3.8,-47C11.5,-43.2,22.9,-38.8,38.1,-30.9Z" transform="translate(100 100)" />
  <FontAwesomeIcon className='about-icon' icon={ faLightbulb } />
</svg>
 <h4>Responsive</h4>
  <p>My layouts will work on any device, big or small.</p>
</div>

  <div>
  

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
<div className='hexagon'></div>
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
restaurant in Lagos in the contact form below.</p>

    </div>
    </div>
  )
}

export default About