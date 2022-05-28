import pizzas from './../assets/pizzas.json';
import PizzaBlock from './PizzaBlock';

const PizzasList = () => {
  return (
    <div className='pizzasList'>
      {pizzas.map((pizzaItem) => {
        return <PizzaBlock key={pizzaItem.id} {...pizzaItem} />;
      })}
    </div>
  );
};

export default PizzasList;
