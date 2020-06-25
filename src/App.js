import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Add from './pages/Add'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/profile' component={Profile} exact/>
        <Route path='/add' component={Add} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
