import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import DetailFunc from "../detailComponents/DetailFunc";
// import { playGame, customer, related, relatedCam } from "../detailComponents/DetailData";

function PopularCategoryFunc(props) {
  return (
    <div className="col-3 mt-0">
      <button className="popular-category-btn blue-2">{props.title}</button>
    </div>
  )
};

  function PopularProductsFunc(props) {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const [heart, setHeart] = useState(props.heart)
    const [fullHeart, setFullHeart] = useState(props.fullHeart)
    function popProductHandler(props) {
      if (setHeart(props.heart)) {
        setHeart(props.fullHeart)
      } else if (setHeart(props.fullHeart)) {
        setHeart(props.heart)
      }
    }

    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
      setRating(rate)
    };

    return (
      <div className="col-3 cards border" id={props.id}>
        <img onClick={() => { setShow(!show) }} className="row popular-product-image" src={props.productImage}></img>

        <button id={props.id} className="heart border-0" onClick={() => { popProductHandler(props) }}>{heart}</button>

        <div className="row bottom">
          <div className="col-12">
            <div className="blue-1">{props.productName}</div>
            <div className="row">
              <div className="col">
                <div className="price black-3">{props.price}</div>
                <Rating
                  onClick={handleRating} />
              </div>

              <div className="col-4"></div>

              <button className="col rounded-circle prod-basket orange mt-3 me-4">
                <i class="fa-solid fa-cart-shopping text-white"></i>
              </button>
            </div>
          </div>

        </div>

        <DetailFunc show={show} fullscreen={fullscreen} setShow={setShow} />
      </div>
    );
  }

  export { PopularCategoryFunc, PopularProductsFunc };
