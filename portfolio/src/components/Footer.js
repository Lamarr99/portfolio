import { faAngleDoubleUp, faArrowsSplitUpAndLeft, faArrowsUpDown, faArrowsUpToLine, faArrowUp19, faArrowUpShortWide, faLongArrowAltUp, faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    
    <div className='footer text-center'>

        <a href='#nav' className='btn-main-offers' > <FontAwesomeIcon className='' icon={ faAngleDoubleUp } /> </a>
    <div className=''>
<ul className='list-groups text-white d-flex justify-content-center'>
{/* <li><a> <FontAwesomeIcon icon={ faGithub } /></a></li> */}
<li><a><FontAwesomeIcon icon={faGithub} /> </a></li>
<li><a><FontAwesomeIcon icon={ faTwitter } /></a></li>
<li><a><FontAwesomeIcon icon={ faWhatsapp } /></a></li>
</ul>

    </div>
    <p className='text-uppercase mt-5 fw-bold text-secondary copyright'>Tony osijo <span className='footer-span'> ©2022</span> </p>
    </div>

  )
}

export default Footer