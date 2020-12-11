import React from 'react';
import BackDrop from "../BackDrop";
import Template from './Template'
import {useDispatch, useSelector} from "react-redux";
// import {showRegister} from "../../../store/actions/modalRegister";

const Register = (props) => {
  // const modalRegister = useSelector(state => state.modalRegister)

  // const dispatch = useDispatch()
  // const showReg = () => {
  //   dispatch(showRegister())
  // }
  return(
    <>
      <BackDrop show={modalRegister} clicked={showReg} />
      <Template
        title='Регистрация'
        // close={showReg}
        bg='#26835f'>
      </Template>
    </>
  )
}

export default Register;