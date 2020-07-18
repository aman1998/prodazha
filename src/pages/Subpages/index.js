import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { string } from 'prop-types'
import PageTemplate from '../../components/pageTemplates/pageTemplate'
import styles from './style.module.css'
import IconsBtn from '../../components/IconsBtn'
import { getSales as getSalesAction } from '../../store/actions1'

const SubPage = ({ category }) => {
  const { success, sales } = useSelector((state) => ({
    sales: state.sales.data,
    success: state.sales.get.success,
  }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    const getSales = () => dispatch(getSalesAction())
    if (!success) getSales()
  }, [dispatch, success])

  return (
    <PageTemplate>
      <div className={`container ${styles.wrapper}`}>
        { sales.map((list) => (
          list.category === category
            ? (
              <div key={list.id} className={styles.block}>
                <img className={styles.img} alt="#" src={list.image} />
                <p>{`${list.price} сом`}</p>
                <div>{list.title}</div>
                <IconsBtn />
              </div>
            )
            : null
        ))}
      </div>
    </PageTemplate>
  )
}

SubPage.propTypes = {
  category: string.isRequired,
}

export default SubPage
