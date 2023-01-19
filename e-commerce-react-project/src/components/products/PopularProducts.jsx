import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { toast, ToastContainer } from "react-toastify";
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

//----------------- PRODUCTS --------------------//
function PopularProductsFunc(props) {
  const { id } = useParams();
  let foundProduct = {};

  if (id) {
    foundProduct = popularProducts.filter((product) => {
      if (product.id == id) {
        return product;
      }
    })[0];
  }
  if (Object.keys(props).length > 0) {
    foundProduct = props.product;
  }

  const product = foundProduct;
  const liked = props.wishList.filter((wish) => wish.id === product.id)[0];
  const [hearT, setHeart] = useState(false);

  function handleShow(e) {
    e == props.id && props.setShow(!props.show);
  }

  function popProductHandler(e) {
    setHeart(!hearT);

    {
      hearT && props.filter((product) => product.id !== e);
      toast(`${product.productName} is liked😇!`);
    }

    props.setWishList(props.wishList + 1);

    props.setWishList([
      ...props.wishList,
      {
        id: product.id,
        name: product.productName,
        image: product.productImage,
        price: product.price,
      },
    ]);
  }

  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="col-3 cards border" key={product.id} id={product.id}>
      <button
        className="border-0 bg-white"
        onClick={() => {
          handleShow(product.id);
        }}
      >
        {popularProducts.map((data, index) => {
          <Link to={`/detail/${data.id}`} state={data}>
            <img
              key={index}
              className="row popular-product-image d-block mx-auto"
              src={data.productImage}
            ></img>
          </Link>;
        })}
      </button>

      <button
        id={product.id}
        className="heart border-0"
        onClick={() => {
          popProductHandler(product.id);
        }}
      >
        {hearT ? props.fullHeart : props.heart}
      </button>

      <div className="row bottom">
        <div className="col-12">
          <div className="blue-1 fw-semibold">{product.productName}</div>
          <div className="row">
            <div className="col">
              <div className="price black-3 fw-semibold">{product.price}</div>
              <Rating onClick={handleRating} />
            </div>

            <div className="col-4"></div>

            <button className="col rounded-circle prod-basket orange mt-3 me-4">
              {product.cart}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export { PopularCategoryFunc, PopularProductsFunc };
