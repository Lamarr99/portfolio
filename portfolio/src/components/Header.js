import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ParticlesBackground from "./ParticlesBackground";

export default function Header() {

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
    strings: [ "I'm a Frontend Developer.", "I design stunning responsive websites"] ,
    // Strings to display
      // Speed settings, try different values untill you get good results
      startDelay: 250,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    return () => {
        typed.destroy();
      };
    }, []);
  


    return (
      <>
      
      <div  className="header-wrapper bg-dark">
         
          <div className="main-info m-3">
        <h3 className="main-text">Hello👋, I'm <span className="my-name text-info">Tony Osijo</span>.
        
        </h3>
      

        <span className="strings" ref={el}></span>

        <a href="#contact" className="btn-main-offer ">Contact me 
        <FontAwesomeIcon className="right-arrow" icon={ faArrowRight } style={{marginLeft:" 1rem"}} fade /></a>
      </div>
      {/* <ParticlesBackground className='particles' /> */}
      </div>

      </>

      
    );
  }

  
       