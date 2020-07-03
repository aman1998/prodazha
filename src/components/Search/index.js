import React from 'react'
import SearchIcon from '../Icons/search'
import styles from './filter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { showSearchResult } from '../../store/actions'
// import { Redirect } from 'react-router-dom'

let Filter = () => {
    const {search} = useSelector(state => ({
        search: state.search,
    }))

    const dispatch = useDispatch()
    const searchList = (search) => dispatch(showSearchResult(search))

    const handleFilter = (e) => {
        e.preventDefault()
        const filter = e.target.elements.list.value
        searchList(filter)
    }

    return(
        <div>
            <form className={styles.form} onSubmit={handleFilter}>
                <input type='text' placeholder='название товара' name='list' value={search} onChange={(e) => searchList(e.target.value)}/>
                <button><SearchIcon /></button>
            </form>
        </div>
    )
}

export default Filter