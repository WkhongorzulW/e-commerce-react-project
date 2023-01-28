import CartProduct from "../products/CartProduct";
import { useState } from "react";

export default function Cart(props) {
  const [counter, setCounter] = useState(1);

  const cartProduct = props.cart.map((item, index) => {
    return (
      <CartProduct
        key={index}
        image={item.image}
        name={item.name}
        price={item.price}
        color={item.color}
        cart={props.cart}
        setCart={props.setCart}
        id={item.id}
        counter={counter}
        setCounter={setCounter}
      />
    );
  });
  return (
    <div className="inner-box mx-auto my-5">
      <div className="row">
        <div className="col-8 me-3">
          <div className="row cart-prod">
            <div className="row blue-6 p-2">
              <h5 className="col-5">Product</h5>
              <h5 className="col">Price</h5>
              <h5 className="col">Quantity</h5>
              <h5 className="col">Subtotal</h5>
            </div>
            {cartProduct}
          </div>
          <div className="row cart-btns mt-4">
            <button className="col-4 orange py-3">Continue shopping</button>
            <button className="col mx-5 py-3 bg-white">Update cart</button>
            <button
              className="col py-3 bg-white"
              onClick={() => {
                props.setCart([]);
              }}
            >
              Clear cart
            </button>
          </div>
        </div>
        <div className="col border p-0 cart-total">
          <h5 className="text-center blue-6 m-0 p-2 pb-3">Cart total</h5>
          <div className="col m-4 mx-5">
            <div className="row">
              <h5 className="col">Subtotal</h5>
              <h5 className="col text-end">
                $ {props.cart.map((c, idx) => {})}
              </h5>
              <hr className="my-4" />
              <input
                type="number"
                name="couponCode"
                placeholder="Enter coupon code"
                className="coupon col-9"
              />
              <input
                type="button"
                className="apply col blue-1 fw-semibold"
                name="apply"
                value="Apply"
              />
              <hr className="my-4" />
              <select name="country">
                <option value="o1">Option 1</option>
                <option value="o2">Option 2</option>
                <option value="o3">Option 3</option>
              </select>
              <div className="row my-4">
                <div className="col">Total amount</div>
                <div className="col text-end">
                  $ {(props.cart.length * 11.7).toFixed(1)}
                </div>
              </div>
              <button className="orange proceed py-2 fs-5 fw-semibold">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
