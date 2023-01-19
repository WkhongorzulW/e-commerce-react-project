import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import DetailFunc from "../detailComponents/DetailFunc";
import { toast, ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { popularProducts } from "../Data";

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
  const [hearT, setHeart] = useState(false);
  const { id } = useParams();
  let foundProduct = {};
  if (id) {
    foundProduct = popularProducts.map((product) => {
      if (product.id == id) {
        return product;
      }
    })[0];
  }

  if (Object.keys(props.length > 0)) {
    foundProduct = props.product;
  }

  const product = foundProduct;
  const liked = props.wishList.filter((wish) => wish.id === product.id)[0];

  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="col-3 cards border" key={props.id}>
      <Link to={`/detail/${props.id}`}>
        <img
          className="row popular-product-image d-block mx-auto"
          src={props.productImage}
        ></img>
      </Link>

      <button
        id={props.id}
        className="heart border-0"
        onClick={() => {
          setHeart(!hearT);
          if (!liked) {
            const likedProduct = {
              id: product.id,
              name: product.productName,
              image: product.productImage,
              price: product.price,
              liked: true,
            };
            props.setWishList([...props.wishList, likedProduct]);
          } else {
            props.setWishList(
              props.wishList.filter((w) => w.id !== product.id)
            );
          }
          console.log(props.wishList);
        }}
      >
        {liked ? props.fullHeart : props.heart}
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
    </div>
  );
}

export { PopularCategoryFunc, PopularProductsFunc };
