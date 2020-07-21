import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'
import IconsBtn from '../IconsBtn'
import { getSales as getSalesAction } from '../../store/actions1'

const GetProducts = () => {
  const { search, sales, loading, success,
    failed, error, favoritesList, token, edit } = useSelector(
    (state) => ({
      search: state.reducer.search,
      sales: state.sales.data,
      loading: state.sales.get.loading,
      success: state.sales.get.success,
      failed: state.sales.get.failed,
      error: state.sales.get.error,
      description: state.sales.description,
      favoritesList: state.auth.myProfile.favoritesList,
      edit: state.reducer.edit,
      token: state.auth.token,
    }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    const getSales = () => dispatch(getSalesAction())
    if (!success) getSales()
  }, [token, edit, dispatch, success])

  return (
    <div>
      <div className={`container ${styles.wrapper}`}>
        { loading && <div>Загрузка...</div> }
        { failed && <div>Ошибка: {error}</div> }
        { success && token
        && sales.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map(
          (list) => (
            <div key={list.id} className={styles.block}>
              <img className={styles.img} alt="#" src={list.image} />
              <p>{`${list.price} сом`}</p>
              <div>{list.title}</div>
              <IconsBtn id={list.id} status={favoritesList.includes(list.id)} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default GetProducts
