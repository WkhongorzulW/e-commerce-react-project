import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { contact, header, Menus } from "../Data";
import ContactFunc from "../header/ContactFunc";
import HeaderFunc from "../header/HeaderFunc";
import MainMenu from "../MainMenu";
import { playGame, customer, related, relatedCam } from "./DetailData";
import DetailProductFunc from "../detailComponents/detailProductFunc";

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

function DetailFunc(props) {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div className="row">
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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailFunc;
