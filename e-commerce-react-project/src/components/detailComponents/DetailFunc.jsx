import React, { useState } from "react";
import { customer, relatedCam, relatedOther } from "./DetailData";
import ReviewsFunc from "./Reviews";
import RelatedCamFunc from "./RelatedCamFunc";
import { PopularProductsFunc } from "../products/PopularProducts";
import { Rating } from "react-simple-star-rating";
import { siZes } from "./DetailData";
import { useLocation, useParams } from "react-router-dom";

const sizes = siZes.map((size) => {
  return <Sizes si={size.si} />;
});

function Sizes(props) {
  return <button className="col-2 mx-2 py-1 border-0">{props.si}</button>;
}

function DetailFunc(props) {
  const [wishList, setWishList] = useState([]);
  const [heart, setHeart] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  console.log(location.state);
  const detail = location.state;
  console.log(detail);
  console.log(location);

  // function popProductHandler(props) {
  //   setHeart(!heart);
  // }

  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const reviews = customer.map((item) => {
    return (
      <ReviewsFunc title={item.title} rev={item.rev} revBtn={item.revBtn} />
    );
  });

  const relatedC = relatedCam.map((product) => {
    return (
      <RelatedCamFunc
        productImage={product.productImage}
        productName={product.productName}
        id={product.id}
        heart={product.heart}
        fullHeart={product.fullHeart}
        addToCart={product.addToCart}
        cartIcon={product.cartIcon}
        viewIcon={product.viewIcon}
        viewedIcon={product.viewedIcon}
        wishList={wishList}
        setWishList={setWishList}
      />
    );
  });

  const relatedO = relatedOther.map((product) => {
    return (
      <PopularProductsFunc
        productImage={product.productImage}
        productName={product.productName}
        price={product.price}
        id={product.id}
        heart={product.heart}
        fullHeart={product.fullHeart}
        wishList={wishList}
        setWishList={setWishList}
      />
    );
  });

  return (
    <div className="detail-page">
      <h1>HI</h1>
      <div className="row inner-box mx-auto my-5">
        <div className="col me-2">
          <div className="row">
            <img
              src={detail.productImage}
              alt={detail.productName}
              className="prod-img"
            />
          </div>
          <div className="row">
            <img src={detail.moreImage} alt="more image" className="more-img" />
            <img src={detail.moreImage} alt="more image" className="more-img" />
          </div>
        </div>

        <div className="col">
          <h2 className="blue-1">{detail.productName}</h2>
          <h2 className="black-3 my-3">{detail.price}</h2>
          <Rating /> <span className="black-3 fw-light">No reviews</span>
          <h5 className="black-5 mt-3">
            Availablity:{" "}
            <span className="fs-5 fw-normal green-1">🗸 In stock</span>
          </h5>
          <div className="black-6">
            Hurry up! only 34 product left in stock!
          </div>
          <hr />
          <div className="row mt-4">
            <h6 className="black-5 col-2">Color: </h6>
            <span className="col-2">
              <i className="fa-solid fa-circle green-2 rounded-circle p-1 me-2"></i>{" "}
              <i className="fa-solid fa-circle"></i>
            </span>
          </div>
          <div className="row my-3">
            <h6 className="black-5 col-2">Size:</h6>
            <div className="col">{sizes}</div>
          </div>
          <div className="row quant mb-4">
            <h6 className="black-5 col-3">Quantity: </h6>
            <button className="m-0 col-1">-</button>{" "}
            <button className="m-0 col-2">1</button>{" "}
            <button className="m-0 col-1">+</button>
          </div>
          <div className="col-10 mx-auto">
            <div className="row">
              <button className="col-4 detailBtn orange fs-5 fw-semibold">
                Add to cart
              </button>
              <button className="col-4 detailBtn orange fs-5 fw-semibold ms-2">
                Buy it now
              </button>
              <button className="col ms-5 border-0"></button>
            </div>
          </div>
          <hr />
          <div className="row">
            <h6 className="black-6 col-1">Sku:</h6>
            <div className="col black-6">01133-9-9</div>
          </div>
          <div className="row">
            <h6 className="black-6 col-2">Category:</h6>
            <div className="col black-6">20% off, 49% off Alex remote</div>
          </div>
          <h6 className="black-6">
            Share: <img src={detail.share} alt="share" className="ms-3" />
          </h6>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-3 mx-auto detail-bottom">
          <button className="fw-semibold">Description</button>
          <button className="text-white fw-semibold px-5">Reviews</button>
        </div>
      </div>
      <div>{reviews}</div>
      <div className="row inner-box mx-auto mb-5">
        <h2 className="my-4">Related product</h2>
        {relatedC}
        {relatedO}
      </div>
    </div>
  );
}

export default DetailFunc;
