import "../App.css";
import "../Default.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AliceCarousel from "react-alice-carousel";

import {
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
  latest,
} from "./Data";

import SpecialProdFunc from "./header/SpecialProdFunc";

import FirstProductFunc from "./products/FirstProductFunc";
import {
  PopularCategoryFunc,
  PopularProductsFunc,
} from "./products/PopularProducts";
import SaleFunc from "./products/SaleFunc";

import AboutFunc from "./aboutShop/AboutFunc";
import UsersFunc from "./aboutShop/UsersFunc";
import BrandFunc from "./aboutShop/BrandFunc";
import BlogFunc from "./aboutShop/BlogFunc";

import { AddTwoCartFunc, ThreeCardsFunc } from "./products/ThreecardsFunc";

import { useState } from "react";

function Home(props) {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

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
        key={product.id}
        id={product.id}
        heart={product.heart}
        fullHeart={product.fullHeart}
        cart={product.cart}
        moreImage={product.moreImage}
        colorCircle={product.colorCircle}
        size={product.size}
        wishList={props.wishList}
        setWishList={props.setWishList}
        hearT={props.hearT}
        setHeart={props.setHeart}
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
    return <BrandFunc brandLogo={brand.brandLogo} />;
  });

  const blog = latest.map((news) => {
    return (
      <BlogFunc
        productImage={news.productImage}
        date={news.date}
        title={news.title}
        text={news.text}
        source={news.source}
      />
    );
  });

  return (
    <div className="box container-fluid m-0 p-0">
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
          <h3 className="col-6 fw-bold fs-3 blue-2">Popular products</h3>
          <div className="col-6 m-0">
            <div className="row m-0 blue-2">{popCategoryFunc}</div>
          </div>
        </div>

        <AliceCarousel className="inner-box">
          <div className="sliderimg row ms-1">{popProducts}</div>
          <div className="sliderimg row ms-1">{popProducts}</div>
          <div className="sliderimg row ms-1">{popProducts}</div>
        </AliceCarousel>
      </div>

      <div className="sale inner-box text-center mt-5">{saleProd}</div>

      <div className="inner-box three-cards my-5">
        <div className="row">
          <div className="col">{addCart}</div>
          <div className="col-5 two-cards">{twoCard}</div>
        </div>
      </div>

      <div className="row inner-box del mx-auto blue-6">{aboutDel}</div>

      <div className="inner-box my-5">
        <AliceCarousel>
          <div className="row mx-auto users">{user}</div>
          <div className="row mx-auto users">{user}</div>
          <div className="row mx-auto users">{user}</div>
        </AliceCarousel>
      </div>

      <div className="row inner-box brands mx-auto blue-6">{brand}</div>

      <div className="inner-box row mx-auto my-5 blog-top blue-2">
        <div className="row">
          <h4 className="col blue-2 fs-3 fw-semibold">Latest news</h4>
          <a type="button" className="view col blue-2 text-end fs-4">
            View all
          </a>
        </div>
      </div>

      <div className="inner-box mx-auto">
        <AliceCarousel>
          <div className="row blog mx-1">{blog}</div>
          <div className="row blog mx-1">{blog}</div>
          <div className="row blog mx-1">{blog}</div>
          <div className="row blog mx-1">{blog}</div>
          <div className="row blog mx-1">{blog}</div>
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Home;
