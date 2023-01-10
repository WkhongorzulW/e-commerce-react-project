import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function PopularCategoryFunc(props) {
  return (
    <div className="col-3 mt-0">
      <button className="popular-category-btn blue-2">{props.title}</button>
    </div>
  )
}

function popProductHandler(props) {
  console.log("HI");
  console.log(props.productName)
}

function PopularProductsFunc(props) {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="col-3 card" id={props.id}>
      <img className="row popular-product-image" src={props.productImage}></img>

      <button id={props.id} className="heart border-0" onClick={() => { popProductHandler(props) }}><i class="fa-regular fa-heart"></i></button>

      <div className="row">
        <div className="col-9">
          <div className="blue-1">{props.productName}</div>
          <div className="row">
            <div className="col">
              <div className="price black-3">{props.price}</div>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove} />
            </div>

            <div className="col-3"></div>

            <button className="col rounded-circle prod-basket orange mt-3">
              <i class="fa-solid fa-cart-shopping text-white"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export { PopularCategoryFunc, PopularProductsFunc };
