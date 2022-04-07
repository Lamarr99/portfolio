import React from 'react'

const Form = () => {
  return (
<div id='contact' className='bg-darks   '>
    <h1 className='text-uppercase fw-bold text-white about-me'>Contact</h1>
    <p className='contact-paragraph text-center '>I am available to work on your projects and bring your ideas <br /> to life. I am just a click away.</p>
    
    <form>
<input type={'text'} placeholder="Name" /><br />
<input type='email' placeholder="Enter Email" /><br />
<textarea className='' placeholder='Your message' /><br />
<a className='btn-main-offer submit ' href='#'>SUBMIT</a>

    </form>

</div>
  )
}

export default Form