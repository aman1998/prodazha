import React from 'react'
import Nav from '../Nav'

let PageTemplate = ({ children }) => {
    return(
        <div style={{position: 'relative'}}>
            <Nav />
            {children}
        </div>
    )
}

export default PageTemplate