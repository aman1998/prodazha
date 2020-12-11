import React from 'react'
import { Route } from 'react-router-dom'
import Events from '../Events/event'

const UserEvents = () => {
  return (
    <Route path='/profile/events'>
      <section>
        <Events title=''/>
      </section>
    </Route>
  )
}

export default UserEvents