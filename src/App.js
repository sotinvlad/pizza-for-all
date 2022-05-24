import pizzaLogo from './assets/pizza-logo.png';
import shopCart from './assets/shop-cart.svg';
import './scss/App.scss';
import './scss/normalize.scss';

const App = () => {
  return (
    <div className='app'>
      <header className='header'>
        <div className='header__logoBlock'>
          <img src={pizzaLogo} alt='Пицца' />
          <div className='header__titleBlock'>
            <span className='header__mainText'>pizza for all</span>
            <span className='header__secondaryText'>
              самая вкусная пицца во вселенной
            </span>
          </div>
        </div>
        <div className='header__cartButton'>
          <span className='header__price'>520 ₽</span>
          <div className='header__vl'></div>
          <img src={shopCart} alt='Корзина' />
          <span className='header__countItems'>3</span>
        </div>
      </header>
    </div>
  );
};

export default App;
