import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'
import {getMyProfile as getProfileAction} from '../src/store/actions1'

import './assets/style/style.scss'

const ENDOPOINT = 'http://localhost:1717'

function App() {

  const { token, profile } = useSelector(state => ({
      token: state.auth.token,
      profile: state.auth.profile,
    }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (token) {
      fetch(`${ENDOPOINT}/profile`, {
        method: 'GET',
        headers: { 'X-Auth': `${token}` },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          dispatch(getProfileAction(data))
        })
    }
  }, [])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path = '/profile/settings' component = {ProfilePage} exact/>
        <Route path = '/profile/cardIn' component = {ProfilePage} exact/>
        <Route path = '/profile/cardOut' component = {ProfilePage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
