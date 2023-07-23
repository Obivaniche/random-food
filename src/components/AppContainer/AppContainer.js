import React from 'react';
import { useEffect, useState } from 'react';
import './AppContainer.css';

function AppContainer() {

  const [resto, setResto] = useState('');

  function randomResto() {
    fetch('https://bandaumnikov.ru/api/test/site/get-index')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let restoArr = data.data;
        let resto = restoArr[Math.floor(Math.random() * restoArr.length)];
        setResto(resto);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
      });
  };

  useEffect(() => {
    randomResto();
  }, []);

  const { name, address, landmark, cuisine, distance, time, photo, business_lunch, price } = resto;

  const businesslLunch = (business_lunch === 'true') ? 'Есть бизнесланч' : 'Нет бизнесланча';

  return (
    <div className='AppContainer'>
      <button className='card__button' onClick={() => randomResto()}>Мне повезет!</button>
      <div className='card'>
        <h2 className='card__header'>{name}</h2>
        <img className='card__photo' src={photo} alt='img' />
        <p className='card__address'>Адрес: {address}</p>
        <p className='card__landmark'>Ориентиры: {landmark}</p>
        <p className='card__distance'>Расстояние до места: {distance} м.</p>
        <p className='card__time'>Время в пути: {time} мин.</p>
        <p className='card__business-lunch'>{businesslLunch}</p>
        <p className='card__cuisine'>Кухня: {cuisine}</p>
        <p className='card__price'>Средний чек: {price} ₽</p>
      </div>
    </div>
  );
}

export default AppContainer;
