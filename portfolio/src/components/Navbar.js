import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  


  return (
    <nav role={"navigation"} className="navbar navbar-expand-lg navbar-dark sticky-top shadow-lg">
    <div id='nav' className="container">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-togglers navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon  icon={ faBars } //style={{ color: 'white' }} 
      />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Contact</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
 
  
  )
}

export default Navbar