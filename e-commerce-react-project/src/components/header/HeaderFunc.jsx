import { useState } from "react";

function HeaderFunc(props) {
  return (
    <div className="row header">
      <div className="inner-box">
        <img className="col-2 product-image" src={props.eLogo} />

        <div className="col-1"></div>

        <input
          type="input"
          className="col-3 bg-white search"
          placeholder={props.searchInput}
        ></input>
        <button type="button" className="col-1 search-btn orange">
          {props.search}
        </button>

        <div className="col-2"></div>

        <div className="col-1 text-end">
          <i class="fa-regular fa-user"></i> {props.signIn}
        </div>

        <button className="col-1 text-end border-0 fav">
          <i class="fa-regular fa-heart"></i>{" "}
          <span className="orange rounded-circle py-1 px-2">
            {props.wishList.length}
          </span>
        </button>

        <div className="my-wishlist border rounded text-dark" id="wish">
          {props.wishList.map((list) => (
            <div className="row border rounded my-2" key={list.id}>
              <img className="col-4" src={list.image} />
              <div className="col">
                <div>{list.name}</div>
                <div>{list.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-1 text-end">
          <i class="fa-solid fa-cart-shopping"></i>{" "}
          <span className="orange rounded-circle py-1 px-2">
            {props.basket}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderFunc;
