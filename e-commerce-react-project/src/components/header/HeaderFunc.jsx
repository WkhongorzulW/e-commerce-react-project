import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Link } from "react-router-dom";

function HeaderFunc(props) {
  function handleClear(e) {
    props.setWishList(props.wishList.filter((item) => item.id !== e));
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
            <div className="my-wishlist border rounded text-dark" id="wish">
              {props.wishList.map((list) => (
                <div
                  className="row border rounded my-2 position-relative"
                  key={list.id}
                  id={list.id}
                >
                  <img className="col" src={list.image} />
                  <div className="col-7">
                    <div className="fw-bold">{list.name}</div>
                    <div>{list.price}</div>
                  </div>
                  <i
                    className="fa-solid fa-x position-absolute clear opacity-50"
                    onClick={() => {
                      handleClear(list.id);
                    }}
                  ></i>
                </div>
              ))}
            </div>
          </DropdownMenu>
        </Dropdown>

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
