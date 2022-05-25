import classNames from 'classnames';

const CategoriesItem = ({selected, itemTitle}) => {
  return (
    <div className={classNames('categories__item', { 'categories__item-selected': selected })}>{itemTitle}</div>
  )
}

export default CategoriesItem;