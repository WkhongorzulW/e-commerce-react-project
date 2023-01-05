import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import ContactFunc from './components/ContactFunc';
import { contact } from './Seed';
import HeaderFunc from './components/HeaderFunc';
import { header } from './Seed';

import SpecialProdFunc from './components/SpecialProdFunc';
import { specialProd } from './Seed';

import { topProducts } from './Seed';
import { popularProducts } from './Seed';
import FirstProductFunc from './components/FirstProductFunc';
import PopularProductsFunc from './components/PopularProducts';
import MainMenu from './components/MainMenu';


function App() {
  const contactSec = contact.map((name) => {
    return <ContactFunc
      help={name.help}
      store={name.store}
      delivery={name.delivery} />
  });

  const headerSec = header.map((item) => {
    return <HeaderFunc
      eLogo={item.eLogo}
      searchInput={item.searchInput}
      search={item.search}
      signIn={item.signIn}
      fav={item.fav}
      basket={item.basket} />
  });

  const specialFunc = specialProd.map((product) => {
    return <SpecialProdFunc
      title={product.title}
      shop={product.shop}
      view={product.view}
      productImage={product.productImage}
      price={product.price} />
  })

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
  });

  return (
    <div className="box container-fluid">
      <header>
        {contactSec}
        {headerSec}
      </header>
      <div className="menu-container container-fluid">
        <div className="inner-box">
          <MainMenu />
        </div>
      </div>
      <div>
        {specialFunc}
      </div>
      <div className="top-products row mx-auto inner-box">
        {firstProductList}
        {popProducts}
      </div>
    </div>
  );
}

export default App;
