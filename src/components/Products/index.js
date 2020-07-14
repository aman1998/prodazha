import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { changeField } from '../../store/actions'
import IconsBtn from '../IconsBtn'
import { getSales as getSalesAction } from '../../store/actions1'

const GetProducts = () => {
  const { search, addList, token, sales, loading, success, failed, error } = useSelector((state) => ({
    search: state.search,
    addList: state.list.addList,
    favoritesList: state.profiles.favoritesList,
    profile: state.profiles.profile,
    token: state.profiles.token,
    sales: state.sales.data,
    loading: state.sales.get.loading,
    success: state.sales.get.success,
    failed: state.sales.get.failed,
    error: state.sales.get.error,
  }))

  const dispatch = useDispatch()
  // const changeValue = React.useCallback((fieldName, value) => {
  //   dispatch(changeField('list', fieldName, value))
  }, [dispatch])

  React.useEffect(() => {
    if (!success) getSales()
    // fetch('http://localhost:1717/list')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     changeValue('addList', data)
    //   })
    const getSales = () => dispatch(getSalesAction())
  }, [success, dispatch])

  return (
    <div>
      <div className={`container ${styles.wrapper}`}>
        { loading && <div>Загрузка...</div> }
        { failed && <div>Ошибка: {error}</div> }
        { success && sales.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map(
          (list) => (
            <div key={list.id} className={styles.block}>
              <img className={styles.img} alt="#" />
              <p>{`${list.price} сом`}</p>
              <div>{list.title}</div>
              <IconsBtn />
            </div>
          ))}
      </div>
    </div>
  )
}

export default GetProducts
