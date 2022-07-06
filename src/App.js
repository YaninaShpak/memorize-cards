import { useMemo } from 'react';
import { useState } from 'react';
import CardForm from './components/CardForm';
import CardsList from './components/CardsList';
import './styles/App.css';
import './styles/Card.css';
import Button from './UI/button/Button';
import CardInput from './UI/input/CardInput';
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

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery]  = useState('');

  const createCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const removeCard = (card) => {
    setCards(cards.filter(c => c.id !== card.id));
  };


  const sortedCards = useMemo(() => {
    if (selectedSort) {
      return [...cards].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }

    return cards;
  }, [selectedSort, cards]);

  const sortedAndSearchedCards = useMemo(() => {
    return sortedCards.filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedCards])

  const sortCards = (sort) => {
    setSelectedSort(sort);
    setCards([...cards].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <h1 className='cards-title'>Карточки для запоминания</h1>
      <nav>
      </nav>
      <div className='container'>
        <section className='newCards'>
          <h2>Новые</h2>
          <CardForm create={createCard } />
          
          <CardInput
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Поиск...' />
          <Button>Создать карточку</Button>
          <div>
            <Select
              value={selectedSort}
              onChange={sortCards}
              options={[
              { value: 'title', name: 'По термину' },
              { value: 'body', name: 'По определению' },
            ]} defaultValue='Сортировка...'/>
          </div>
          {sortedAndSearchedCards.length !== 0
            ? <CardsList
                cards={sortedAndSearchedCards}
                remove={removeCard}
              />
            : <h2>Карточки не найдены</h2>
          }
          
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
