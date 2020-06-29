import React from 'react'
import { connect } from 'react-redux'
import { changeField} from '../../store/actions.js'

let Add = ({title, price, changeValue}) => {
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

const mapStateToProps = (state) => ({
    login: state.login,
    title: state.list.title,
    price: state.list.price,
})

const mapDispatchToProps = (dispatch) => ({
    changeValue: (fieldName, value) => dispatch(changeField('list', fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
