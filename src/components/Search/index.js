import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { string } from 'prop-types'
import SearchIcon from '../Icons/search'
import styles from './filter.module.css'
// import { showSearchResult } from '../../store/actions1'
import { showSearchResult } from '../../store/actions'

const Filter = () => {
  const { search } = useSelector((state) => ({
    search: state.reducer.search,
  }))

  const dispatch = useDispatch()
  const searchList = (e) => dispatch(showSearchResult(e))

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
