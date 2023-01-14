import React, {useState} from "react";
import {Rating} from "react-simple-star-rating";

function AddTwoCartFunc(props) {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="row border rounded d-flex fw-semibold">
      <div className="col-1"></div>
      <img className="col-5" src={props.productImage}></img>
      <div className="col-5 pt-5">
        <h5 className="medi-title mt-3 blue-1 fw-semibold">{props.title}</h5>
        <div className="my-4 black-3 fw-semibold">{props.price}</div>
          <div className="rating">
            <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove} />
          </div>
        <button className="add-to-cart">
          <div className="mt-1 fw-semibold">{props.addBtn}</div>
          <div className="prod-basket p-0 pt-1 text-white orange">
          <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </button>
      </div>
    </div>
  );
}

function ThreeCardsFunc(props) {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="row border rounded mb-2 two-card fw-semibold">
      <div className="col-1"></div>
      <img className="col-7" src={props.productImage} />
      <div className="col pt-4">
        <div className="s-title blue-1">{props.title}</div>
        <div className="black-4">{props.price}</div>
          <div className="rating">
            <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove} />
          </div>
      </div>
    </div>
  );
}

export { AddTwoCartFunc, ThreeCardsFunc };
