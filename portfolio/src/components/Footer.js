import { faAngleDoubleUp, faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faWhatsapp, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const Footer = () => {
  return (
    
    <div id="footer" className='footer text-center'>
<a href='' className='btn-main-offers'><FontAwesomeIcon icon={ faAngleDoubleUp } beat inverse /> </a>
    <div className='mt-3'>
<ul className='list-groups d-flex justify-content-center'>
<li className='contact-brand'><a href='https://github.com/Lamarr99'><FontAwesomeIcon icon= {faGithub} inverse bounce /> </a></li>
<li className='contact-brand'><a href='https://wa.me/message/NLFY2LONBZEVJ1'><FontAwesomeIcon icon={ faWhatsapp } inverse bounce/></a></li>
<li className='contact-brand'><a href='https://www.linkedin.com/in/tony-osijo-55944222b/'><FontAwesomeIcon icon={ faLinkedin } inverse bounce /></a></li>
<li className='contact-brand'><a href='tel:07062826563'><FontAwesomeIcon icon={ faPhone } inverse bounce /></a></li>
<li className='contact-brand'><a href='mailto:tonyleo2019@outlook.com'><FontAwesomeIcon icon={ faEnvelope } inverse bounce /></a></li>
</ul>

    </div>
    <p className='text-uppercase mt-5 fw-bold text-secondary copyright'>Tony osijo <span className='footer-span'> ©2022</span> </p>
    </div>

  )
}

export default Footer