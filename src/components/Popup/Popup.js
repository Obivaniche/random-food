import React from 'react';
import './Popup.css';

function Popup({ isOpen, onClose }) {


    return isOpen ? (
        <div className='popup popup_opened'>
            <div className='popup__container'>
                <button className='button popup__close-button' type='button' onClick={onClose}></button>
                <h2 className='popup__title'>Дружочек - пирожочек!</h2>
                <p className='poup__text'>
                    Перед обедом часто сложно определиться, куда сходить поесть.
                    Но теперь ты в надежных руках!
                    Доверься случаю, отдайся судьбе и результат приятно удивит тебя не раз.
                    Даже если случаю придется отдаваться частенько...
                </p>
            </div>
        </div>
    )
    : null;
}

export default Popup;