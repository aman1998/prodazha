import React from 'react'

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p style={{ color: 'red' }}>Это поле обязательна</p>
      case 'minLength':
        return <p style={{ color: 'red' }}>Это поле должно иметь как минимум 2 буквы</p>
      case 'maxLength':
        return <p style={{ color: 'red' }}>Больше 10 букв нельзя</p>
      case 'pattern':
        return <p style={{ color: 'red' }}>Правильно введите почту</p>
      case 'min':
        return <p style={{ color: 'red' }}>Вам не исполнилось 18 лет!</p>
      case 'max':
        return <p style={{ color: 'red' }}>Максимальная цена 100 000 сомов</p>
      case 'validate':
        return <p style={{ color: 'red' }}>Username is already used</p>
      default:
        return null
    }
  }

  return null
}
