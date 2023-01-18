import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { siZes } from "./DetailData";

const sizes = siZes.map((size) => {
  return <Sizes si={size.si} />;
});

function Sizes(props) {
  return <button className="col-2 mx-2 border-0">{props.si}</button>;
}

function DetailProductFunc(props) {
  const [heart, setHeart] = useState(false);
  function popProductHandler(props) {
    setHeart(!heart);
  }

  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="row inner-box mx-auto my-modal" id={props.id}>
      <div className="col me-3">
        <div className="row border rounded py-5">
          <img
            className="col-10 prod-img d-block mx-auto my-5"
            src={props.productImage}
          ></img>
        </div>
        <div className="row mt-3">
          <div className="col border more-img me-3 py-2">
            <img className="col-6 mx-auto d-block" src={props.moreImage} />
          </div>
          <div className="col border more-img py-2">
            <img className="col-6 mx-auto d-block" src={props.moreImage} />
          </div>
        </div>
      </div>

      <div className="col">
        <h2 className="blue-1">{props.productName}</h2>
        <div className="back-3 fw-bold fs-3 my-4">{props.price}</div>
        <div className="fw-semibold black-4">
          <Rating onClick={handleRating} /> {props.review}
        </div>
        <div className="black-5 my-4">
          {props.available}{" "}
          <span className="green-1 ms-3">
            {" "}
            {props.checkIcon} {props.inStock}
          </span>
        </div>
        <div className="black-6 mb-4">{props.items}</div>
        <hr />
        <div className="black-5 fw-semibold mt-4">
          {props.color}{" "}
          <button className="green-2 bg-white rounded-circle mx-2">
            {" "}
            {props.colorCircle}
          </button>{" "}
          <button className="border-0 bg-white"> {props.colorCircle}</button>
        </div>
        <div className="row my-4">
          <div className="black-5 fw-semibold col-2">{props.size}</div>
          <div className="col">{sizes}</div>
        </div>
        <div className="row quant">
          <div className="black-5 fw-semibold col-2">{props.quantity}</div>
          <button className="col-1">-</button>
          <button className="black-5 fw-semibold col-2">{props.quant}</button>
          <button className="col-1">+</button>
        </div>
        <div className="row my-4 fs-4">
          <button className="orange col-4 me-3 fw-semibold detailBtn mx-auto">
            {props.addBtn}
          </button>
          <button className="orange col-4 detailBtn fw-semibold mx-auto">
            {props.buyBtn}
          </button>
          {/* <button id={props.id} className="heart border-0" onClick={() => { popProductHandler(props) }}>{heart}</button> */}
          <button
            className="col fs-1 border-0 rounded-circle text-center heartT"
            onClick={() => {
              popProductHandler(props);
            }}
          >
            {heart ? props.heart : props.fullHeart}
          </button>
        </div>
        <hr />
        <div className="mt-4">
          <div className="black-5 fw-semibold">{props.sku}</div>
          <div className="my-4 black-5 fw-semibold">{props.category}</div>
          <div className="black-5 fw-semibold">
            Share: <img src={props.share} />
          </div>
        </div>
      </div>
      <div className="row detail-bottom my-4">
        <div className="col-4"></div>
        <button className="col-2 bg-white border fw-semibold fs-5">
          {props.descBtn}
        </button>
        <button className="col-2 text-white fw-semibold fs-5">
          {props.revBtn}
        </button>
      </div>
    </div>
  );
}

export default DetailProductFunc;
