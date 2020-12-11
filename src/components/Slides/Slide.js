import React from 'react'

const Slide = (props) => {
  return(
    <div className='slide' >
      <img src={props.backImg} alt="alt" className='img' />
      <div className='content'>
        <h1>{props.title}</h1>
        <h3>{props.text}</h3>
      </div>
    </div>
  )
}

export default Slide