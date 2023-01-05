import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { topProducts } from './Seed';
import { popularProducts } from './Seed';
import FirstProductFunc from './components/FirstProductFunc';
import PopularProductsFunc from './components/PopularProducts';
import MainMenu from './components/MainMenu';


function App() {
  const firstProductList = topProducts.map((product) => {
    return <FirstProductFunc
      productImage={product.productImage}
      productName={product.productName}
      items={product.items} />
  });

  const popProducts = popularProducts.map((product) => {
    return <PopularProductsFunc
      productImage={product.productImage}
      productName={product.productName}
      price={product.price} />
  })

  return (
    <div className="box container-fluid">
      <div className="menu-container">
        <MainMenu />
      </div>
      <div className="top-products row">
        {firstProductList}
        {popProducts}
      </div>
    </div>
  );
}

export default App;
