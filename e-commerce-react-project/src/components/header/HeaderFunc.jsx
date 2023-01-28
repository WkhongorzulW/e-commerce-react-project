import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";

function HeaderFunc(props) {
  const myWishList = props.wishList.map((list, index) => {
    return (
      <Wishlist
        key={index}
        id={list.id}
        name={list.name}
        image={list.image}
        price={list.price}
        wishList={props.wishList}
        setWishList={props.setWishList}
      />
    );
  });
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

        <div className="col-3"></div>

        <Link
          to={"signup"}
          className="col-1 text-end text-white text-decoration-none"
        >
          <i class="fa-regular fa-user"></i> {props.signIn}
        </Link>

        <Dropdown>
          <Dropdown.Toggle>
            <button className="col-1 text-end border-0 fav">
              <i class="fa-regular fa-heart"></i>{" "}
              <span className="orange rounded-circle py-1 px-2">
                {props.wishList.length}
              </span>
            </button>
          </Dropdown.Toggle>
          <DropdownMenu>
            <div className="my-wishlist border rounded text-dark">
              {myWishList}
            </div>
          </DropdownMenu>
        </Dropdown>

        <div className="col-1 text-end">
          <Link to={"/cartPage"} className="text-decoration-none text-white">
            <i class="fa-solid fa-cart-shopping"></i>{" "}
            <span className="orange rounded-circle py-1 px-2">
              {props.cart.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderFunc;
