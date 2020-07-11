import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { string } from 'prop-types'
import SearchIcon from '../Icons/search'
import styles from './filter.module.css'
import { showSearchResult } from '../../store/actions'
// import { Redirect } from 'react-router-dom'

const Filter = () => {
  const { search } = useSelector((state) => ({
    search: state.search,
  }))

  const dispatch = useDispatch()
  const searchList = () => dispatch(showSearchResult(search))

  const handleFilter = (e) => {
    e.preventDefault()
    const filter = e.target.elements.list.value
    searchList(filter)
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleFilter}>
        <input type="text" placeholder="название товара" name="list" value={search} onChange={(e) => searchList(e.target.value)} />
        <div><SearchIcon /></div>
      </form>
    </div>
  )
}

showSearchResult.propTypes = {
  search: string,
}

export default Filter
