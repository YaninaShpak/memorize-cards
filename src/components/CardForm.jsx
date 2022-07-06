import React from 'react';
import { useState } from 'react';
import Button from '../UI/button/Button';
import CardInput from '../UI/input/CardInput';

const CardForm = ({create}) => {
  const [card, setCard] = useState({ title: '', body: '' });

  function addNewCard(e) {
    e.preventDefault();
    const newCard = {
      id: Date.now(),
      ...card
    };
    create(newCard);
    setCard({ title: '', body: '' });
  }

  return (
    <div>
      <form>
        <CardInput
          type="text"
          placeholder='Термин'
          value={card.title}
          onChange={e => setCard({...card, title: e.target.value })} />
        <CardInput
          type="text"
          placeholder='Определение'
          value={card.body}
          onChange={e => setCard({...card, body: e.target.value })} />
        <Button onClick={addNewCard}>Создать карточку</Button>
      </form>
    </div>
  );
};

export default CardForm;