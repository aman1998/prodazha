import React from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

// Обертка для всего сайта
const PageTemplate = (props) => {
  return (
    <div className='pageTemplate'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default PageTemplate