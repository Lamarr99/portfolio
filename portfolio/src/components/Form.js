import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'


function MyForm ()  {
  const {register, handleSubmit, reset, formState: {errors},} = useForm()
  

  const onSubmit = (data) => console.log(data)

  return (
<div id='contact' className='bg-darks '>
    <h1 className='text-uppercase fw-bold text-white about-me'>Contact</h1>
    <p className='contact-paragraph text-center'>I am available to work on your projects and bring your ideas <br /> to life. I am just a click away.</p>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      
<input { ...register('guestName', { required:true }) } type='text'  placeholder="Name" />
{errors.guestName && <p>Name is required.</p>}
<input { ...register( 'guestEmail', { required:true } ) } type='email' placeholder="Enter Email" /><br />
{ errors.guestEmail && <p>Enter Email</p> }
<textarea { ...register('yourMessage', { required:true }) } placeholder='Send me a message' /><br />
{ errors.yourMessage && <p>Send feedback</p> }
<div>
<input href='#' type={ 'submit' }  className="btn-main-offer submit" value="submit" />
</div>
    </form>

</div>
  )
}




export default MyForm