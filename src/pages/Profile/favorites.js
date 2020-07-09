import React from 'react'
import PageTemplate from '../../components/PageProfiles'
import styles from './profile.module.css'
import { useSelector, useDispatch } from 'react-redux'

let Favorites = () => {
    const {favoritesList} = useSelector(state => ({
        favoritesList: state.profiles.favoritesList
    }))

    return(
        <PageTemplate>
            <div>
                <div className={styles['profiles__container']}>Избранное</div>
                {/* {favoritesList.map(list => (
                    <div key={list.id} className={styles.block}>
                        <img className={styles.img} />
                        <p>{`${list.price} сом`}</p>
                        <div>{list.title}</div>
                    </div>
                ))} */}
            </div>
        </PageTemplate>
    )
}

export default Favorites