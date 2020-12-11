import React from 'react'
import Cancel from '../../../assets/icons/cancel'
import Logo from '../../../assets/icons/logo.svg'

const Header = (props) => {
  return (
    <div>
      <div className='loginHeader'style={{background: props.bg}}>
        <div>
          +400 хп за регистрацию
        </div>
        <div className='cancel' onClick={props.close}><Cancel /></div>
      </div>
      <div className='loginHeaderContent'>
        <img src={Logo} alt='#'/>
        <div>Добро пожаловать в Arenum</div>
        <div style={{marginBottom: '10px'}}>Нажимая кнопку, вы соглашаетесь с Условиями использования и Политикой конфиденциальности
          и подтверждаете, что вам есть 18 лет.
        </div>
      </div>
    </div>
  )
}

export default Header