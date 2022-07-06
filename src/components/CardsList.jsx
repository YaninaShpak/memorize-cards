import React from 'react';
import Card from './Card';

const CardsList = ({cards, remove}) => {
  return (
    <ul className='cardsList'>
      {cards.map((card) =>
        <Card
          key={card.id}
          card={card}
          remove={remove}
        />
      )}
    </ul>
  );
};

export default CardsList;