import React from 'react'
import Nav from '../../Nav'

const PageTemplate = ({ children }) => (
  <div style={{ position: 'relative' }}>
    <Nav />
    {children}
  </div>
)

export default PageTemplate
