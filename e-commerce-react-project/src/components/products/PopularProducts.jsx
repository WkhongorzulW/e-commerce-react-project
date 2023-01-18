import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import DetailFunc from "../detailComponents/DetailFunc";
import { toast, ToastContainer } from "react-toastify";

function PopularCategoryFunc(props) {
  return (
    <div className="col-3 mt-0">
      <button className="popular-category-btn blue-2 fw-semibold">
        {props.title}
      </button>
    </div>
  );
}

function PopularProductsFunc(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [hearT, setHeart] = useState(false);

  function handleShow(e) {
    e == props.id && props.setShow(!props.show);
    // props.setModal([
    //   ...props.modal,
    //   {
    //     id: props.id,
    //     productImage: props.productImage,
    //     productName: props.productName,
    //     price: props.price,
    //     moreImage: props.moreImage,
    //     review: props.review,
    //     available: props.available,
    //     inStock: props.inStock,
    //     items: props.items,
    //     color: props.color,
    //     colorCircle: props.colorCircle,
    //     size: props.size,
    //     quantity: props.quantity,
    //     quant: props.quant,
    //     addBtn: props.addBtn,
    //     buyBtn: props.buyBtn,
    //     heart: props.heart,
    //     fullHeart: props.fullHeart,
    //     sku: props.sku,
    //     category: props.category,
    //     share: props.share,
    //     descBtn: props.descBtn,
    //     revBtn: props.revBtn,
    //     checkIcon: props.checkIcon,
    //   },
    // ]);

    // props.modal.filter((product) => {
    //   console.log(product.id);
    //   product.id == props.id &&
    //     props.setModal([
    //       ...props.modal,
    //       {
    //         id: product.id,
    //         productImage: product.productImage,
    //         productName: product.productName,
    //         price: product.price,
    //         moreImage: product.moreImage,
    //         review: product.review,
    //         available: product.available,
    //         inStock: product.inStock,
    //         items: product.items,
    //         color: product.color,
    //         colorCircle: product.colorCircle,
    //         size: product.size,
    //         quantity: product.quantity,
    //         quant: product.quant,
    //         addBtn: product.addBtn,
    //         buyBtn: product.buyBtn,
    //         heart: product.heart,
    //         fullHeart: product.fullHeart,
    //         sku: product.sku,
    //         category: product.category,
    //         share: product.share,
    //         descBtn: product.descBtn,
    //         revBtn: product.revBtn,
    //         checkIcon: product.checkIcon,
    //       },
    //     ]);
    //   props.setShow(!props.show);
    // });
  }

  function popProductHandler(e) {
    setHeart(!hearT);

    {
      hearT && props.filter((product) => product.id !== e);
      toast(`${props.productName} is liked😇!`);
    }

    props.setWishList(props.wishList + 1);

    props.setWishList([
      ...props.wishList,
      {
        id: props.id,
        name: props.productName,
        image: props.productImage,
        price: props.price,
      },
    ]);
  }

  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="col-3 cards border" key={props.id} id={props.id}>
      <button
        className="border-0 bg-white"
        onClick={() => {
          handleShow(props.id);
        }}
      >
        <img
          className="row popular-product-image d-block mx-auto"
          src={props.productImage}
        ></img>
      </button>

      <button
        id={props.id}
        className="heart border-0"
        onClick={() => {
          popProductHandler(props.id);
        }}
      >
        {hearT ? props.fullHeart : props.heart}
      </button>

      <div className="row bottom">
        <div className="col-12">
          <div className="blue-1 fw-semibold">{props.productName}</div>
          <div className="row">
            <div className="col">
              <div className="price black-3 fw-semibold">{props.price}</div>
              <Rating onClick={handleRating} />
            </div>

            <div className="col-4"></div>

            <button className="col rounded-circle prod-basket orange mt-3 me-4">
              {props.cart}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />

      <DetailFunc
        show={props.show}
        fullscreen={fullscreen}
        setShow={props.setShow}
        modal={props.modal}
        setModal={props.setModal}
      />
    </div>
  );
}

export { PopularCategoryFunc, PopularProductsFunc };
