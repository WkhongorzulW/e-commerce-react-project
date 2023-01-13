import {useState} from "react";
import WishlistFunc from "./WishlistFunc";
import { popularProducts } from "../Data";

function HeaderFunc(props) {
  const wishlist = popularProducts.map((product) => {
    return (
      <WishlistFunc
        productImage={product.productImage}
        productName={product.productName}
        price={product.price}
        id={product.id} />
    )
  });
  const [myWishList, setMyWishList] = useState([]);
  function MyWishListFunc(){
    setMyWishList([...myWishList, wishlist]);
    console.log(myWishList)
  }
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

        <button className="col-1 text-end border-0 fav" onClick={MyWishListFunc}>
          <i class="fa-regular fa-heart"></i> <span className="orange rounded-circle py-1 px-2">{props.wishList}</span>
        </button>

        <div className="col-1 text-end">
          <i class="fa-solid fa-cart-shopping"></i> <span className="orange rounded-circle py-1 px-2">{props.basket}</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderFunc;
