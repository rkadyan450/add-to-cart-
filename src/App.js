import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">React Shop</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
