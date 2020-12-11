import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Header from './Header'
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
// import {showLogin} from "../../../store/actions/modalLogin";
// import {getProfile, setToken} from "../../../store/actions1";

const Login = (props) => {
  const dispatch = useDispatch()
  const handleRegister = (body) => {
    fetch(`http://localhost:1717/registr`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
  }
  const handleLogin = (body) => {
    // e.preventDefault()
    fetch(`http://localhost:1717/auth`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw response.status
        return response.json()
      })
      .then( data => {
        // dispatch(getProfile({...data.user.data}))
        // dispatch(setToken(data.user.token))
      })
      .catch(e => {
        console.log({message: e.message})
      })
  }
  return (
    <div className='login'>
      <Header title={props.title} bg={props.bg} close={props.close}/>
      <Formik
        initialValues={
          props.title === 'Регистрация' ?
            {
              login: '',
              email: '',
              password: '',
              confirmPassword: '',
            } :
            {
              login: '',
              email: '',
              password: '',
            }
        }
        validationSchema={
          props.title === 'Вход' ?
            Yup.object().shape({
              login: Yup.string()
                .required('Введите никнейм!'),
              email: Yup.string()
                .email('Неправильный формат')
                .required('Введите почту!'),
              password: Yup.string()
                .min(6, 'Минимум 6 символов')
                .required('Введите пароль!'),
            }) :
            Yup.object().shape({
              login: Yup.string()
                .required('Введите никнейм!'),
              email: Yup.string()
                .email('Неправильный формат')
                .required('Введите почту!'),
              password: Yup.string()
                .min(6, 'Минимум 6 символов')
                .required('Введите пароль!'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
                .required('Подтвердите пароль!'),
            })
        }
        onSubmit={
          props.title === 'Регистрация' ?
            fields => {
              handleRegister(fields)
            }
            :
            fields => {
              handleLogin(fields)
              // dispatch(showLogin())
            }
        }
      >
        {() => (
          <Form className='loginForm'>
            <Field type="text" name="login" placeholder='Никнейм' />
            <ErrorMessage name="login" component="div" className='error'/>
            <Field name="email" type="text" placeholder='Почта'/>
            <ErrorMessage name="email" component="div" className='error'/>
            <Field type="password" name="password" placeholder='Пароль'/>
            <ErrorMessage name="password" component="div" className='error'/>
            {
              props.title === 'Регистрация' ?
                <div>
                  <Field type="password" name="confirmPassword" placeholder='Повторите пароль'/>
                  <ErrorMessage name="confirmPassword" component="div" className='error'/>
                </div>
                : ''
            }
            <button type="submit" className='loginFormBtn' style={{background: props.bg}}>
              {props.title}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
