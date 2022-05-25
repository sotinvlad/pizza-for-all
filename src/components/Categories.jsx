import sortingArrow from './../assets/sorting-arrow.svg';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="categories__list">
            <CategoriesItem selected={true} itemTitle={'Все'}/>
            <CategoriesItem selected={false} itemTitle={'Мясные'}/>
            <CategoriesItem selected={false} itemTitle={'Вегетарианские'}/>
            <CategoriesItem selected={false} itemTitle={'Гриль'}/>
            <CategoriesItem selected={false} itemTitle={'Острые'}/>
            <CategoriesItem selected={false} itemTitle={'Закрытые'}/>
        </div>
        <div className="categories__sortingBlock">
            <img src={sortingArrow}/>
            <span className="categories__mainText">Соритровка по:</span>
            <span className="categories__secondaryText">Популярности</span>
        </div>
    </div>
  )
}

export default Categories;