import React, { useState } from "react";
import {Rating} from "react-simple-star-rating";

function PopularCategoryFunc(props){
  return(
    <div className="col-3 mt-0">
      <button className="popular-category-btn blue-2">{props.title}</button>
    </div>
  )
}
function PopularProductsFunc(props){
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="col-3 card">
      <img className="row popular-product-image" src={props.productImage}></img>
      <div className="row">
        <div className="col-9">
          <div className="blue-1">{props.productName}</div>
          <div className="price black-3">{props.price}</div>
          <div className="rating">
            <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove} />
          </div>
        </div>
        <button className="col-2 prod-basket orange">
        <i class="fa-solid fa-cart-shopping text-white"></i>
        </button>
      </div>
    </div>
  );
}

export {PopularCategoryFunc, PopularProductsFunc} ;
