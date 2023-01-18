import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  contact,
  header,
  footerChildren,
  footerTop,
  mainFooter,
} from "../Data";
import ContactFunc from "../header/ContactFunc";
import HeaderFunc from "../header/HeaderFunc";
import MainMenu from "../MainMenu";
import DetailProductFunc from "./playGameDetail";
import {
  playGame,
  customer,
  relatedCam,
  relatedOther,
} from "./DetailData";
import ReviewsFunc from "./Reviews";
import RelatedCamFunc from "./RelatedCamFunc";
import { PopularProductsFunc } from "../products/PopularProducts";
import { FooterTopFunc } from "../footer/FooterTopFunc";
import {
  MainFooterFunc,
  FooterNavFunc,
} from "../footer/MainFooterFunc";
import FooterChildrenFunc from "../footer/FooterChidren";


function DetailFunc(props) {
  const [wishList, setWishList] = useState([]);

  const contactSec = contact.map((name) => {
    return (
      <ContactFunc help={name.help} store={name.store} delivery={name.delivery} />
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
        wishList={wishList}
        window={window}
        // setWindow={setWindow}
      />
    );
  });
  
  const detailProduct = playGame.map((product) => {
    return (
      <DetailProductFunc
        productImage={product.productImage}
        moreImage={product.moreImage}
        productName={product.productName}
        price={product.price}
        review={product.review}
        available={product.available}
        inStock={product.inStock}
        items={product.items}
        color={product.color}
        colorCircle={product.colorCircle}
        size={product.size}
        quantity={product.quantity}
        quant={product.quant}
        addBtn={product.addBtn}
        buyBtn={product.buyBtn}
        heart={product.heart}
        fullHeart={product.fullHeart}
        sku={product.sku}
        category={product.category}
        share={product.share}
        descBtn={product.descBtn}
        revBtn={product.revBtn}
        checkIcon={product.checkIcon}
      />
    );
  });
  
  const reviews = customer.map((item) => {
    return <ReviewsFunc title={item.title} rev={item.rev} revBtn={item.revBtn} />;
  });
  
  const relatedC = relatedCam.map((product) => {
    return (
      <RelatedCamFunc
        productImage={product.productImage}
        productName={product.productName}
        id={product.id}
        heart={product.heart}
        fullHeart={product.fullHeart}
        addToCart={product.addToCart}
        cartIcon={product.cartIcon}
        viewIcon={product.viewIcon}
        viewedIcon={product.viewedIcon}
        wishList={wishList}
        setWishList={setWishList}
      />
    );
  });
  
  const relatedO = relatedOther.map((product) => {
    return (
      <PopularProductsFunc
        productImage={product.productImage}
        productName={product.productName}
        price={product.price}
        id={product.id}
        heart={product.heart}
        fullHeart={product.fullHeart}
        wishList={wishList}
        setWishList={setWishList}
      />
    );
  });
  
  const fTop = footerTop.map((item) => {
    return (
      <FooterTopFunc
        title={item.title}
        email={item.email}
        emailIcon={item.emailIcon}
        hPhoneIcon={item.hPhoneIcon}
        text={item.text}
        phNumber={item.phNumber}
      />
    );
  });
  
  const mFooter = mainFooter.map((item) => {
    return (
      <MainFooterFunc
        logo={item.logo}
        address={item.address}
        social={item.social}
      />
    );
  });
  
  const fNavWithChildren = footerChildren.map((child) => {
    const children = child.data.map((d) => {
      return <FooterChildrenFunc title={d.title} />;
    });
    return (
      <div className="col fs-4">
        <FooterNavFunc title={child.header} />
        {children}
      </div>
    );
  });

  return (
    <div className="row modal">
      <Modal
        show={props.show}
        fullscreen={props.fullscreen}
        onHide={props.setShow}
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body className="m-0 p-0">
          <div>
            {contactSec}
            {headerSec}
          </div>
          <div className="menu-container">
            <MainMenu className="inner-box" />
          </div>
          <div className="mt-3">{detailProduct}</div>
          <div>{reviews}</div>
          <div className="inner-box mt-5 mb-4"><h3 className="blue-2 fw-bold">Related product</h3></div>
          <div className="row inner-box mx-auto mb-5">
            {relatedC}
            {relatedO}
          </div>
          <div className="footer blue-6 m-0">
            <div className="footer-top inner-box mx-auto">{fTop}</div>

            <div className="main-footer inner-box mx-auto row mt-5">
              <div className="col-2">{mFooter}</div>
              <div className="col-1"></div>
              <div className="col footer-nav">
                <div className="row">{fNavWithChildren}</div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailFunc;
