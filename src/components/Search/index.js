import React from 'react'
import SearchIcon from '../Icons/search'
import styles from './filter.module.css'
import { connect } from 'react-redux'
import { changeField, showSearchResult } from '../../store/actions'
import { Redirect } from 'react-router-dom'

let Filter = ({ searchList, search }) => {
    const [redirect, setRedirect] = React.useState(false)

    const handleFilter = (e) => {
        e.preventDefault()
        const filter = e.target.elements.list.value
        setRedirect(true)
        searchList(filter)
        console.log(search)
    }
    return(
        <div>
            <form className={styles.form} onSubmit={handleFilter}>
                <input type='text' placeholder='название товара' name='list'/>
                <button><SearchIcon /></button>
            </form>
            {redirect ? <Redirect to ='/searchResult'/> : null}
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