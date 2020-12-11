import React from 'react'

import BackDrop from "../BackDrop";
import Template from './Template'
import {useDispatch, useSelector} from "react-redux";
// import {showLogin} from "../../../store/actions/modalLogin";

const Login = (props) => {
  const dispatch = useDispatch()
  // const modalLog = useSelector(state => state.modalLogin)

  // const showLog = () => {
  //   dispatch(showLogin())
  // }

  return (
    <>
      <BackDrop show={modalLog} clicked={showLog} />
      <Template
        title='Вход'
        // close={showLog}
        bg='#0054ff'
      > </Template>
    </>
  )
}

export default Login
