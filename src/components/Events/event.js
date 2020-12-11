import React from 'react'
import avatar from '../../assets/img/pubg.jpg'

const Event = (props) => {
  const eventItems = [
    { id: 1, day: 28, month: 'Октябрь', title: 'Top 15 challange', time: '16:30', price: 1500, mode: '1 vs All'},
    { id: 2, day: 12, month: 'Ноября', title: 'Top 10 challange', time: '12:30', price: 1500, mode: '1 vs All'},
    { id: 3, day: 28, month: 'Декабря', title: 'Top 15 challange', time: '10:00', price: 1500, mode: '1 vs All'},
  ]
  return (
    <div className='wrapper'>
      <h1 className='container'>{props.title}</h1>
      {eventItems.map(item => (
      <section className='block' key={item.id}>
        <div className='event container'>
          <img src={avatar} alt='#' className='avatar'/>
          <div className='event-content'>
            <div className='info'>
              <div className='info-top'>
                <div className='info-top__date'>{`${item.day} ${item.month} в ${item.time}`}</div>
                <div className='info-top__title'>{item.title}</div>
              </div>
              <div className='info-bottom'>
                <div className='info-bottom__rule'><span>Нажимая кнопку вы соглашаетесь</span>
                  <p>с Нашими правилами турнира</p>
                </div>
                <div className='info-bottom__btn'>Учавстовать за 1 билет</div>
              </div>
            </div>
            <div className='info2'>
              <div className='info2-top'>
                <div>
                  <div className='info2-top__price'>
                    <div>{`${item.price} рублей`}</div>
                    <div>Призовой фонд</div>
                  </div>
                  <div className='percent'>100%</div>
                </div>
                <div className='info2-top__mode'>{item.mode}</div>
              </div>
              <div className='info2-price'></div>
            </div>
          </div>
        </div>
      </section>
      ))}
    </div>
  )
}

export default Event