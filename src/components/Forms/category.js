import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeField } from '../../store/actions'

let Add = () => {
    const dispatch = useDispatch()
    const changeValue = (fieldName, value) => dispatch(changeField('list', fieldName, value))
    
    return(
        <div>
            Выберете категорию 
            <select name="category" onChange={(e) =>changeValue('category', e.target.value)}>
                <option>Выберите категорию</option>
                <option defaultValue value={'Электроника'}>Электроника</option>
                <option value={'Все для дома'}>Все для дома</option>
                <option value={'Одежда'}>Одежда</option>
                <option value={'Автомобиль'}>Автомобиль</option>
                <option value={'Недвижимость'}>Недвижимость</option>
            </select>
        </div>
    )
}

export default Add
