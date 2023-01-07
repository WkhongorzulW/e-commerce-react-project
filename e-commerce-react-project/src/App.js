import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AliceCarousel from "react-alice-carousel";

import ContactFunc from "./components/ContactFunc";
import {
  contact,
  header,
  specialProd,
  topProducts,
  popularCategory,
  popularProducts,
  sale,
  addToCart,
  threeCards,
  about,
  users,
  brands,
} from "./Seed";

import HeaderFunc from "./components/HeaderFunc";

import SpecialProdFunc from "./components/SpecialProdFunc";

import SaleFunc from "./components/SaleFunc";

import FirstProductFunc from "./components/FirstProductFunc";
import { PopularCategoryFunc } from "./components/PopularProducts";
import { PopularProductsFunc } from "./components/PopularProducts";

import MainMenu from "./components/MainMenu";

import AboutFunc from "./components/AboutFunc";

import UsersFunc from "./components/UsersFunc";

import { AddTwoCartFunc, ThreeCardsFunc } from "./components/ThreecardsFunc";

import BrandFunc from "./components/BrandFunc";

function App() {
  const contactSec = contact.map((name) => {
    return (
      <ContactFunc
        help={name.help}
        store={name.store}
        delivery={name.delivery}
      />
    );
  });

  const headerSec = header.map((item) => {
    return (
      <HeaderFunc
        eLogo={item.eLogo}
        searchInput={item.searchInput}
        search={item.search}
        signIn={item.signIn}
        fav={item.fav}
        basket={item.basket}
      />
    );
  });

  const specialFunc = specialProd.map((product) => {
    return (
      <SpecialProdFunc
        title={product.title}
        shop={product.shop}
        view={product.view}
        productImage={product.productImage}
        price={product.price}
        style={product.style}
      />
    );
  });

  const firstProductList = topProducts.map((product) => {
    return (
      <FirstProductFunc
        productImage={product.productImage}
        productName={product.productName}
        items={product.items}
      />
    );
  });

  const popCategoryFunc = popularCategory.map((name) => {
    return <PopularCategoryFunc title={name.title} />;
  });

  const popProducts = popularProducts.map((product) => {
    return (
      <PopularProductsFunc
        productImage={product.productImage}
        productName={product.productName}
        price={product.price}
      />
    );
  });

  const saleProd = sale.map((product) => {
    return (
      <SaleFunc
        productImage={product.productImage}
        newBtn={product.newBtn}
        shopBtn={product.shopBtn}
        salesPr={product.salesPr}
        description={product.description}
      />
    );
  });

  const addCart = addToCart.map((product) => {
    return (
      <AddTwoCartFunc
        productImage={product.productImage}
        title={product.title}
        price={product.price}
        addBtn={product.addBtn}
      />
    );
  });

  const twoCard = threeCards.map((product) => {
    return (
      <ThreeCardsFunc
        productImage={product.productImage}
        title={product.title}
        price={product.price}
      />
    );
  });

  const aboutDel = about.map((item) => {
    return <AboutFunc icon={item.icon} title={item.title} text={item.text} />;
  });

  const user = users.map((user) => {
    return (
      <UsersFunc
        userImage={user.userImage}
        userName={user.userName}
        userComment={user.userComment}
      />
    );
  });

  const brand = brands.map((brand) => {
    return(
      <BrandFunc
      brandLogo={brand.brandLogo} />
    )
  })

  return (
    <div className="box container-fluid">
      <header>
        {contactSec}
        {headerSec}
      </header>

      <div className="menu-container">
        <div className="inner-box">
          <MainMenu />
        </div>
      </div>

      <div className="first-carousel">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          {specialFunc}
        </AliceCarousel>
      </div>

      <div className="col-8 mx-auto inner-box">
        <div className="top-products row">
          <AliceCarousel>
            <div className="sliderimg row mx-1">{firstProductList}</div>
            <div className="sliderimg row mx-1">{firstProductList}</div>
            <div className="sliderimg row mx-1">{firstProductList}</div>
          </AliceCarousel>
        </div>
      </div>

      <div className="popular inner-box row mx-auto mt-5">
        <div className="row">
          <h3 className="medi-title col-6">Popular products</h3>
          <div className="col-6 m-0">
            <div className="row m-0">{popCategoryFunc}</div>
          </div>
        </div>

        <AliceCarousel className="inner-box">
          <div className="sliderimg row ms-1">{popProducts}</div>
          <div className="sliderimg row ms-1">{popProducts}</div>
          <div className="sliderimg row ms-1">{popProducts}</div>
        </AliceCarousel>
      </div>

      <div className="sale inner-box text-center mt-5">{saleProd}</div>

      <div className="inner-box three-cards d-flex my-5">
        <div className="row mx-auto">
          <div className="col-7">{addCart}</div>
          <div className="col">{twoCard}</div>
        </div>
      </div>

      <div className="row inner-box del mx-auto">{aboutDel}</div>

      <div className="inner-box my-5">
        <AliceCarousel>
          <div className="row mx-auto users">{user}</div>
          <div className="row mx-auto users">{user}</div>
          <div className="row mx-auto users">{user}</div>
        </AliceCarousel>
      </div>

      <div className="row inner-box brands mx-auto">
        {brand}
      </div>
    </div>
  );
}

export default App;
