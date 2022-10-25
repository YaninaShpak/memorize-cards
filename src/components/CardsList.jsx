import React from 'react';

import Card from './Card';

const CardsList = ({ cards, remove }) => {
  if (!cards.length) {
    return (
      <h2>Карточки не найдены</h2>
    );
  }

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