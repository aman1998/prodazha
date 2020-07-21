import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/Login'
import Profile from './pages/ProfilePage'
import ProfileList from './pages/ProfilePage/myList'
import ProfileFavorites from './pages/ProfilePage/favorites' 
import ProfileUsers from './pages/ProfilePage/users' 
import Add from './pages/AddPage'
import Electronics from './pages/Subpages/electronics'
import Household from './pages/Subpages/household'
import Clothing from './pages/Subpages/clothing'
import Cars from './pages/Subpages/cars'
import Property from './pages/Subpages/property'
import { useSelector, useDispatch } from 'react-redux'
import { getMyProfile as getMyProfileAction,  getSales as getSalesAction} from './store/actions1'


const App = () => {
  const { token, edit, success, favoritesList } = useSelector(
    (state) => ({
      edit: state.reducer.edit,
      token: state.auth.token,
      success: state.sales.get.success,
      favoritesList: state.auth.myProfile.favoritesList,
    }))
  const dispatch = useDispatch()

  React.useEffect(() => {
    const getSales = () => dispatch(getSalesAction())
    if (!success) getSales()
    if (token) {
      fetch('http://localhost:1717/profile', {
        method: 'GET',
        headers: { 'X-Auth': `${token}` },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          const getMyProfile = (profile) => dispatch(getMyProfileAction(profile))
          getMyProfile(data)
          console.log(data)
        })
    }
  }, [token, edit, dispatch, success])
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
        <Route path='/list' component={ProfileList} exact/>
        <Route path='/favorites' component={ProfileFavorites} exact/>
        <Route path='/users' component={ProfileUsers} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
