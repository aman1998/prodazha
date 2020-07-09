import React from 'react'
import PageTemplate from '../../components/PageProfiles'
import styles from './profile.module.css'

let List = () => {
    return(
        <PageTemplate>
            <div>
                <div className={styles['profiles__container']}>Объявления</div>
            </div>
        </PageTemplate>
    )
}

export default List