/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './ImageCard.css'

export default function ImageCard({imgPath}) {
  return (
    <div>
      <div className='ImageContainer'>
        <img alt='Image' src={imgPath}/>
      </div>
    </div>
  )
}
