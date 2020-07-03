import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeField} from '../../store/actions.js'

let Add = () => {
    const {login, title, price} = useSelector(state => ({
        login: state.login,
        title: state.list.title,
        price: state.list.price,
    }))

    const dispatch = useDispatch()
    const changeValue = (fieldName, value) => dispatch(changeField('list', fieldName, value))

    return(
        <div>
            <input 
            type="text" 
            placeholder="Название" 
            value={title}
            onChange={(e) => changeValue('title', e.target.value)}
            />
            <input
            placeholder="Цена" 
            value={price}
            onChange={(e) => changeValue('price', e.target.value)}
            />
        </div>
    )
}

export default Add
