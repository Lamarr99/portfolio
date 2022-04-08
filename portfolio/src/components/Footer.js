import { faAngleDoubleUp, faArrowsSplitUpAndLeft, faArrowsUpDown, faArrowsUpToLine, faArrowUp19, faArrowUpShortWide, faLongArrowAltUp, faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    
    <div className='footer text-center'>

        <a href='#nav' className='btn-main-offers'><FontAwesomeIcon icon={ faAngleDoubleUp } beat  size='2x'/> </a>
    <div className='mt-3'>
<ul className='list-groups text-white d-flex justify-content-center'>
<li className='contact-brand'><a href='https://github.com/Lamarr99'><FontAwesomeIcon icon={faGithub} inverse bounce size="2x"/> </a></li>
<li className='contact-brand'><a href=''><FontAwesomeIcon icon={ faTwitter }  inverse bounce size="2x"/></a></li>
<li className='contact-brand'><a href=''><FontAwesomeIcon icon={ faWhatsapp } inverse bounce size="2x"/></a></li>
<li className='contact-brand'><a href=''><FontAwesomeIcon icon={ faLinkedin } inverse bounce  size='2x'/></a></li>
<li className='contact-brand'><a href=''><FontAwesomeIcon icon={ faTelegram } inverse bounce size="2x"/></a></li>
</ul>

    </div>
    <p className='text-uppercase mt-5 fw-bold text-secondary copyright'>Tony osijo <span className='footer-span'> ©2022</span> </p>
    </div>

  )
}

export default Footer