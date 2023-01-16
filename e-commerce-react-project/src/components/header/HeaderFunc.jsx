import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import SignUpFunc from "./SignUp";
import LoginFunc from "./Login";
import { logIn } from "../Data";
import { signUp } from "../Data";
import {Link} from "react-router-dom";

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
                <div className="row border rounded my-2" key={list.id}>
                  <img className="col" src={list.image} />
                  <div className="col">
                    <div>{list.name}</div>
                    <div>{list.price}</div>
                  </div>
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
