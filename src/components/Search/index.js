import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { string } from 'prop-types'
import SearchIcon from '../Icons/search'
import styles from './filter.module.css'
import { showSearchResult } from '../../store/actions1'
// import { Redirect } from 'react-router-dom'

const Filter = () => {
  const { search } = useSelector((state) => ({
    search: state.sales.searchResult,
  }))

  const dispatch = useDispatch()
  const searchList = () => dispatch(showSearchResult(search))

  return (
    <div>
      <form className={styles.form}>
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
