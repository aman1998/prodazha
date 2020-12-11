import React, {useState} from 'react'
import Carousel from 'nuka-carousel'

import Slide from '../components/Slides/Slide'

import pugBackImg from '../assets/icons/pubg-wide-high.jpg'

const Slider = () => {
  const [config, setConfig] = useState({
    slideIndex: 0,
    length: 5,
    wrapAround: false,
    slidesToShow: 1.0,
    transitionMode: 'scroll',
    heightMode: 'max',
    withoutControls: true
  })

  const [slides, setSlides] = useState([
    {
      title: 'PLAY TODAY ON XBOX, PC, PS4, AND STADIA',
      text: 'Compete with 100 players on a remote island for a winner-takes-all showdown where strategic gameplay is as important as shooting skills.',
      backImg: pugBackImg
    },
    {
      title: 'PLAY TODAY ON XBOX, PC, PS4, AND STADIA',
      text: 'Compete with 100 players on a remote island for a winner-takes-all showdown where strategic gameplay is as important as shooting skills.',
      backImg: pugBackImg
    },
    {
      title: 'PLAY TODAY ON XBOX, PC, PS4, AND STADIA',
      text: 'Compete with 100 players on a remote island for a winner-takes-all showdown where strategic gameplay is as important as shooting skills.',
      backImg: pugBackImg
    }
  ])

  return(
    <div className='slider'>
      <div className='slides'>
        <Carousel
          withoutControls={false}
          wrapAround={config.wrapAround}
          slideIndex={config.slideIndex}
          transitionMode={config.transitionMode}
          heightMode={config.heightMode}>
          {slides.map(slide=> (
            <Slide
              key={slide.title}
              title={slide.title}
              text={slide.text}
              backImg={slide.backImg}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Slider