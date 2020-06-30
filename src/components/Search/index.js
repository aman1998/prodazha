import React from 'react'
import SearchIcon from '../Icons/search'
import styles from './filter.module.css'
import { connect } from 'react-redux'
import { changeField, showSearchResult } from '../../store/actions'
import { Redirect } from 'react-router-dom'

let Filter = ({ searchList, search }) => {

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

const mapStateToProps = (state) => ({
    title: state.list.title,
    search: state.search
})

const mapDispatchToProps = (dispatch) => ({
    searchList: (search) => dispatch(showSearchResult(search)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)