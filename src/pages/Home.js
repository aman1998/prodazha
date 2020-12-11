import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import Events from '../components/Events/event'
import Slider from "../container/Slider";

const MainPage = () => {
  return (
    <PageTemplate>
      <div className='home-main'>
        <Slider />
        <Events title='Расписание'/>
      </div>
    </PageTemplate>
  )
}

export default MainPage