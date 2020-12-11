import React from 'react'
import Vk from '../../assets/icons/vkontakte'
import Tg from '../../assets/icons/telegram'

const Footer = () => {
  return(
    <div className='container'>
      <footer className='footer'>
        <div className='footer-top'>
          <div className='footer-icons'>
            <div><Vk /></div>
            <div><Tg /></div>
            <div><Vk /></div>
            <div><Tg /></div>
          </div>
          <div className='footer-rules'>
            <div>Условия использования</div>
            <div>Политика конфиденциальности</div>
            <div>Политика возвратов</div>
            <div>Техподдержка</div>
          </div>
          <div>18+</div>
        </div>
        <div className='footer-bottom'>
          Платформа Arenum не одобрена, не связана, не поддерживается и не спонсируется Apple Inc, Garena Online Private Limited, PUBG CORPORATION, Activision Publishing, Inc., Supercell Oy или Nintendo Co., Ltd, а также иными владельцами иных игр. Весь контент, названия игр, торговые наименования и / или коммерческий внешний вид, товарные знаки, произведения искусства и связанные изображения являются товарными знаками и / или материалами, защищенными авторским правом соответствующих правообладателей.
        </div>
      </footer>
    </div>
  )
}

export default Footer