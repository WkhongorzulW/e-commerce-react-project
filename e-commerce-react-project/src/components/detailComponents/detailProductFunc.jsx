import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { playGame } from "./DetailData";

function Sizes(props) {
  return <button className="col">{props.si}</button>;
}

function DetailProductFunc(props) {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="row inner-box mx-auto my-modal">
      <div className="col">
        <img className="row" src={props.productImage}></img>
        <div className="row mt-3">
          <img className="col border me-3" src={props.moreImage} />
          <img className="col border me-3" src={props.moreImage} />
        </div>
      </div>

      <div className="col">
        <h2 className="blue-1">{props.productName}</h2>
        <div className="back-3 fw-bold fs-3 my-4">{props.price}</div>
        <div>
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
        <div className="black-6 mt-4">
          {props.color}{" "}
          <span className="green-2 border rounded-circle px-1 py-1 mx-2">
            {" "}
            {props.colorCircle}
          </span>{" "}
          <span> {props.colorCircle}</span>
        </div>
        <div className="row my-4">
          <div className="col">{props.size}</div>
          {/* <div className="col">{sizesSi}</div> */}
        </div>
        <div className="row">
          <div className="col">{props.quantity}</div>
        </div>
        <div className="row my-4">
          <button className="orange col-4 me-3 detailBtn mx-auto">
            {props.addBtn}
          </button>
          <button className="orange col-4 detailBtn mx-auto">
            {props.buyBtn}
          </button>
          <button className="col-2 fs-1 border-0 rounded-circle px-2 text-center">
            {props.heart}
          </button>
        </div>
        <hr />
        <div className="mt-4">
          <div>{props.sku}</div>
          <div className="my-4">{props.category}</div>
          <div>
            Share: <img src={props.share} />
          </div>
        </div>
      </div>
      <div className="row detail-bottom my-4">
        <div className="col-4"></div>
        <button className="col-2 bg-white border">{props.descBtn}</button>
        <button className="col-2 text-white">{props.revBtn}</button>
      </div>
    </div>
  );
}

export default DetailProductFunc;
