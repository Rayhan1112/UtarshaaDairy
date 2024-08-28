import React from 'react'
import './contact.css'

export default function contact() {
  return (
    <div>
        <div className='ContactForm'>
        <h1>Contact</h1>
        <div className='Inputs'>
            <input type='text' className='input' placeholder='Name'/>
            <input className='input' type='numbric' placeholder='Number'/>
            <textarea  className='input' type='text' placeholder='Message'/>
            <button className='btn'>Send Enquiry</button>
        </div>

        </div>
      
    </div>
  )
}
