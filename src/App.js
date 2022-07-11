import { useMemo } from 'react';
import { useState } from 'react';
import CardFilter from './components/CardFilter';
import CardForm from './components/CardForm';
import CardsList from './components/CardsList';
import './styles/App.css';
import './styles/Card.css';
import Button from './UI/button/Button';
import CardInput from './UI/input/CardInput';
import Modal from './UI/modal/Modal';
import Select from './UI/select/Select';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'DOM (Document Object Model — «объектная модель документа»)',
      body: 'это API для доступа и управления содержимым документа (в частности HTML)'
    },
    {
      id: 2,
      title: 'Всплытие события',
      body: 'происходит, когда событие инициируется элементом, у родителя которого назначено такое же событие'
    },
    {
      id: 3,
      title: 'Date',
      body: 'встроенный объект, который содержит дату и время и предоставляет методы управления ими'
    },
    {
      id: 4,
      title: 'Функция-конструктор',
      body: 'используется для создания множества объектов по одному шаблону'
    }
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const createCard = (newCard) => {
    setCards([...cards, newCard]);
    setModal(false);
  };

  const removeCard = (card) => {
    setCards(cards.filter(c => c.id !== card.id));
  };


  const sortedCards = useMemo(() => {
    if (filter.sort) {
      return [...cards].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return cards;
  }, [filter.sort, cards]);

  const sortedAndSearchedCards = useMemo(() => {
    return sortedCards.filter(card => card.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedCards]);

  

  return (
    <div className="App">
      <h1 className='cards-title'>Карточки для запоминания</h1>
      <nav>
      </nav>
      <div className='container'>
        <section className='newCards'>
          <h2>Новые</h2>
          <Button onClick={() => setModal(true)}>Создать карточку</Button>
          <Modal
            visible={modal}
            setVisible={setModal}
          >
            <CardForm create={createCard } />
          </Modal>
          
          <CardFilter
            filter={filter}
            setFilter={setFilter}
          />
          <CardsList
            cards={sortedAndSearchedCards}
            remove={removeCard}
          />
        </section>
        <section>
          <h2>На изучении</h2>
        </section>
        <section>
          <h2>Изучено</h2>
          
        </section>
      </div>
    </div>
  );
}

export default App;
