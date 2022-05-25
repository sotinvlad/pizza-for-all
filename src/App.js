import Categories from './components/Categories';
import Header from './components/Header';
import './scss/App.scss';
import './scss/normalize.scss';

const App = () => {
  return (
    <div className='app'>
      <Header totalPrice={1680} itemsInCart={3} />
      <div className='mainContent'>
        <Categories />
      </div>
    </div>
  );
};

export default App;
