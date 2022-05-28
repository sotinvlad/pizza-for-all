import classNames from 'classnames';
import { useState } from 'react';
import sortingArrow from './../assets/sorting-arrow.svg';

const categories = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <div className='categories'>
      <div className='categories__list'>
        {categories.map((categoryName, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={classNames('categories__item', {
                'categories__item-selected': selectedCategory === index,
              })}>
              {categoryName}
            </div>
          );
        })}
      </div>
      <div className='categories__sortingBlock'>
        <img src={sortingArrow} />
        <span className='categories__mainText'>Соритровка по:</span>
        <span className='categories__secondaryText'>Популярности</span>
      </div>
    </div>
  );
};

export default Categories;
