import React from 'react'
import Search from '../Icons/search'
import styles from './filter.module.css'

let Filter = () => {
    return(
        <form className={styles.form}>
            <input placeholder='название товара'/>
            <button><Search /></button>
        </form>
    )
}

export default Filter