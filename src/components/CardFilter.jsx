import React from 'react';
import Button from '../UI/button/Button';
import CardInput from '../UI/input/CardInput';
import Select from '../UI/select/Select';

const CardFilter = ({filter, setFilter}) => {
  return (
    <div>
      <CardInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value })}
        placeholder='Поиск...' />
      <Button>Создать карточку</Button>
      <div>
        <Select
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
          { value: 'title', name: 'По термину' },
          { value: 'body', name: 'По определению' },
        ]} defaultValue='Сортировка...'/>
      </div>
    </div>
  );
};

export default CardFilter;