import React, { useState } from 'react';
import Button from '../UI/button/Button';

const Card = ({ card, remove}) => {
  const [rotateCard, setRotateCard] = useState(false);

  const rotate = () => {
    if (!rotateCard) {
      setRotateCard(true);
    } else {
      setRotateCard(false);
    }
    
  }

  return (
    <li onClick={rotate} className={`card ${rotateCard ? 'rotate' : ''}`}>
      <div className='card__front'>
        <div className='card__info'>
          <h3 className="card__title">{card.title}</h3>
          <p className="card__description">- {card.body}</p>
        </div>
        <div className='card__background'>
          <Button onClick={() => remove(card)}>Удалить</Button>
          <Button className='button--choose'>Изучить</Button>
        </div>
      </div>
      <div className='card__back'>
        <h3 className="card__title">{card.title}</h3>
      </div>
      
    </li>
  );
};

export default Card;