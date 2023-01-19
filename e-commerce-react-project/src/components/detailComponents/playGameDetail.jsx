import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { siZes } from "./DetailData";
import { useLocation, useParams } from "react-router-dom";
import { popularProducts } from "../Data";

const sizes = siZes.map((size) => {
  return <Sizes si={size.si} />;
});

function Sizes(props) {
  return <button className="col-2 mx-2 border-0">{props.si}</button>;
}

// const detailProduct = popularProducts.map((item) => {
//   return(
//     <DetailProductFunc
//        />
//   )
// })

function DetailProductFunc(props) {
  const [heart, setHeart] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const detail = location.state;
  function popProductHandler(props) {
    setHeart(!heart);
  }

  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="row inner-box mx-auto my-modal" id={detail.id}>
      <div className="col me-3">
        <div className="row border rounded py-5">
          <img
            className="col-10 prod-img d-block mx-auto my-5"
            src={detail.productImage}
          ></img>
        </div>
        <div className="row mt-3">
          <div className="col border more-img me-3 py-2">
            <img className="col-6 mx-auto d-block" src={detail.moreImage} />
          </div>
          <div className="col border more-img py-2">
            <img className="col-6 mx-auto d-block" src={detail.moreImage} />
          </div>
        </div>
      </div>

      <div className="col">
        <h2 className="blue-1">{detail.productName}</h2>
        <div className="back-3 fw-bold fs-3 my-4">{detail.price}</div>
        <div className="fw-semibold black-4">
          <Rating onClick={handleRating} /> {detail.review}
        </div>
        <div className="black-5 my-4">
          {detail.available}{" "}
          <span className="green-1 ms-3">
            {" "}
            {detail.checkIcon} {detail.inStock}
          </span>
        </div>
        <div className="black-6 mb-4">{detail.items}</div>
        <hr />
        <div className="black-5 fw-semibold mt-4">
          {detail.color}{" "}
          <button className="green-2 bg-white rounded-circle mx-2">
            {" "}
            {detail.colorCircle}
          </button>{" "}
          <button className="border-0 bg-white"> {detail.colorCircle}</button>
        </div>
        <div className="row my-4">
          <div className="black-5 fw-semibold col-2">{detail.size}</div>
          <div className="col">{sizes}</div>
        </div>
        <div className="row quant">
          <div className="black-5 fw-semibold col-2">{detail.quantity}</div>
          <button className="col-1">-</button>
          <button className="black-5 fw-semibold col-2">{detail.quant}</button>
          <button className="col-1">+</button>
        </div>
        <div className="row my-4 fs-4">
          <button className="orange col-4 me-3 fw-semibold detailBtn mx-auto">
            {detail.addBtn}
          </button>
          <button className="orange col-4 detailBtn fw-semibold mx-auto">
            {detail.buyBtn}
          </button>
          <button
            className="col fs-1 border-0 rounded-circle text-center heartT"
            onClick={() => {
              popProductHandler(detail);
            }}
          >
            {heart ? detail.heart : detail.fullHeart}
          </button>
        </div>
        <hr />
        <div className="mt-4">
          <div className="black-5 fw-semibold">{detail.sku}</div>
          <div className="my-4 black-5 fw-semibold">{detail.category}</div>
          <div className="black-5 fw-semibold">
            Share: <img src={detail.share} />
          </div>
        </div>
      </div>
      <div className="row detail-bottom my-4">
        <div className="col-4"></div>
        <button className="col-2 bg-white border fw-semibold fs-5">
          {detail.descBtn}
        </button>
        <button className="col-2 text-white fw-semibold fs-5">
          {detail.revBtn}
        </button>
      </div>
    </div>
  );
}

export default DetailProductFunc;
