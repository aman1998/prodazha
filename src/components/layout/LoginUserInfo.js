import React from 'react'

import Gold from '../../assets/icons/gold-svgrepo-com'

const LoginUserInfo = (props) => {
  return(
    <div className='loginUserInfo'>
      <div className='username'>
        {props.username}
      </div>
      <div className='userAvatar'>
        <img src={props.avatar} alt='user Avatar' className='avatar' />
      </div>
      <div className='userMoney'>
        <Gold backColor='#F7B900' w='20px' h='20px' />
        <div className='moneyText'>
          {props.userMoney} сом
        </div>
      </div>
    </div>
  )
}

export default LoginUserInfo