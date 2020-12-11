import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const UserInfo = () => {
  const { name } = useSelector(state => ({
    name: state.auth.profile.name,
  }))
  return (
    <section className='block'>
      <div className='blockUser'>
        <div className='userInfo'>
          <div className='avatar'></div>
          <div className='name'>{name}</div>
        </div>
        <div className='results'>
          <div className='item'>
            <p>0</p>
            <p>mmr</p>
          </div>
          <div className='item'>
            <p>0</p>
            <p>Подписчиков</p>
          </div>
          <div className='item'>
            <p>0</p>
            <p>Подписки</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserInfo