import React from 'react'
import { connect } from 'react-redux'
import { changeField } from '../../store/actions'

let Add = ({ changeValue }) => {
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

const mapStateToProps = (state) => ({
    category: state.list.category,
})

const mapDispatchToProps = (dispatch) => ({
    changeValue: (fieldName, value) => dispatch(changeField('list', fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
