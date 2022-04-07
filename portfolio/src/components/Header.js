import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
    strings: [ " I'm a Frontend Web Developer.", "I build interactive Web Apps"] ,
    // Strings to display
      // Speed settings, try different values untill you get good results
      startDelay: 250,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 120,
    loop: true
    });

    return () => {
        typed.destroy();
      };
    }, []);
  


    return (
      <div  className="header-wrapper">
          <div className="main-info m-3">
        <h3 className="main-text">Hello👋, I'm <span className="my-name">Tony Osijo</span>.<br />
        {/* I'm a Frontend Web Developer. */}
        </h3><br />
        {/* Element to display typing strings */}
        <span className="strings" ref={el}></span>
        <a href="#contact" className="btn-main-offer ">Contact me 
        <FontAwesomeIcon className="right-arrow"  icon={ faArrowRight } style={{marginLeft:" 1rem"}} /></a>
      </div>
      </div>

      
    );
  }

// const Header = () => {
//   return (
//     <div className="header-wrapper">
//         <div className="main-info">

//     <h1>Web development</h1>
//     <Typed/>
//     </div>

//     </div>

//   )
// }

// export default Header