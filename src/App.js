import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/Login'
import Profile from './pages/ProfilePage'
import ProfileList from './pages/ProfilePage/list'
import ProfileFavorites from './pages/ProfilePage/favorites' 
import ProfileUsers from './pages/ProfilePage/users' 
import Add from './pages/AddPage'
import Electronics from './pages/Subpages/electronics'
import Household from './pages/Subpages/household'
import Clothing from './pages/Subpages/clothing'
import Cars from './pages/Subpages/cars'
import Property from './pages/Subpages/property'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/profile' component={Profile} exact/>
        <Route path='/add' component={Add} exact/>
        <Route path='/electronics' component={Electronics} exact/>
        <Route path='/household' component={Household} exact/>
        <Route path='/clothes' component={Clothing} exact/>
        <Route path='/cars' component={Cars} exact/>
        <Route path='/property' component={Property} exact/>
        <Route path='/profile/list' component={ProfileList} exact/>
        <Route path='/profile/favorites' component={ProfileFavorites} exact/>
        <Route path='/profile/users' component={ProfileUsers} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
