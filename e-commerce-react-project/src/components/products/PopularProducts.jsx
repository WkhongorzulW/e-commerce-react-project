import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import DetailFunc from "../detailComponents/DetailFunc";

function PopularCategoryFunc(props) {
  return (
    <div className="col-3 mt-0">
      <button className="popular-category-btn blue-2 fw-semibold">{props.title}</button>
    </div>
  );
}

function PopularProductsFunc(props) {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const [heart, setHeart] = useState(false);
  function popProductHandler(e) {
    setHeart(!heart);

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
    <div className="col-3 cards border" id={props.id}>
      <img
        onClick={() => {
          setShow(!show);
        }}
        className="row popular-product-image"
        src={props.productImage}
      ></img>

      <button
        id={props.id}
        className="heart border-0"
        onClick={(e) => {
          popProductHandler(e);
        }}
      >
        {heart ? props.fullHeart : props.heart}{" "}
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

      <DetailFunc show={show} fullscreen={fullscreen} setShow={setShow} />
    </div>
  );
}

export { PopularCategoryFunc, PopularProductsFunc };
