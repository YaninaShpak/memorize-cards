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
    if (card.title !== '' && card.body !== '') {
      create(newCard);
    }
    setCard({ title: '', body: '' });
  }

  return (
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
      <Button onClick={addNewCard}>Добавить</Button>
    </form>
  );
};

export default CardForm;