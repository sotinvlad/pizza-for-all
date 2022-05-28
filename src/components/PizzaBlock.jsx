import classNames from 'classnames';
import { useState } from 'react';

const PizzaBlock = ({
  id,
  title,
  sizes,
  types,
  imageUrl,
  price,
  rating,
  category,
  countInCart,
}) => {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  return (
    <div className='pizzaBlock'>
      <img src={imageUrl} />
      <span className='pizzaBlock__title'>{title}</span>
      <div className='pizzaBlock__preferences'>
        <div className='pizzaBlock__types'>
          {types.map((type, index) => (
            <span
              className={classNames('pizzaBlock__type', {
                'pizzaBlock__type-selected': selectedType === index,
              })}
              key={index}
              onClick={() => setSelectedType(index)}>
              {type === 0 ? 'тонкое' : 'традиционное'}
            </span>
          ))}
        </div>
        <div className='pizzaBlock__sizes'>
          {sizes.map((size, index) => (
            <span
              className={classNames('pizzaBlock__size', {
                'pizzaBlock__size-selected': selectedSize === index,
              })}
              key={index}
              onClick={() => setSelectedSize(index)}>
              {size} см.
            </span>
          ))}
        </div>
      </div>
      <div className='pizzaBlock__footer'>
        <span className='pizzaBlock__price'>От {price} ₽</span>
        <div className='pizzaBlock__addButton'>
          <span className='pizzaBlock__plusCharacter'>+</span>
          <span className='pizzaBlock__addButtonText'>Добавить</span>
          {countInCart && <span className='pizzaBlock__counter'>1</span>}
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
