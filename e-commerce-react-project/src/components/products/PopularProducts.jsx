import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
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

  const liked = props.wishList.filter((item) => item.id === props.id)[0];

  const addToCart = props.cart.filter((item) => item.id === props.id)[0];

  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="col-3 cards border" key={props.id}>
      <Link
        to={`/detailPage/${props.id}`}
        state={{
          productImage: props.productImage,
          moreImage: props.moreImage,
          productName: props.productName,
          price: props.price,
          share: props.share,
        }}
      >
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
              liked: true,
              id: props.id,
              name: props.productName,
              image: props.productImage,
              price: props.price,
            };
            props.setWishList([...props.wishList, likedProduct]);
            toast(`${props.productName} is added to wishlist😇`);
          } else {
            props.setWishList(props.wishList.filter((w) => w.id !== props.id));
            toast(`${props.productName} is removed from wishlist🙄`);
          }
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

            <button
              className="col rounded-circle prod-basket orange mt-3 me-4"
              onClick={() => {
                if (!addToCart) {
                  const addProduct = {
                    addToCart: true,
                    id: props.id,
                    name: props.productName,
                    image: props.productImage,
                    price: props.price,
                    color: props.color,
                  };
                  props.setCart([...props.cart, addProduct]);
                  toast(`${props.productName} is added to cart😇`);
                } else {
                  props.setCart(props.cart.filter((w) => w.id !== props.id));
                  toast(`${props.productName} is removed from cart🙄`);
                }
              }}
            >
              {addToCart ? props.basket : props.basketPlus}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export { PopularCategoryFunc, PopularProductsFunc };
