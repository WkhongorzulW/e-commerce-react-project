export default function CartProduct(props) {
  function handleClear(e) {
    props.setCart(props.cart.filter((cart) => cart.id !== e));
  }
  return (
    <div className="row border-bottom py-4 cart position-relative">
      <div className="col-5">
        <div className="row">
          <img src={props.image} alt="product" className="col" />
          <div className="col">
            <h5 className="blue-1">{props.name}</h5>
            <div>Color: {props.color}</div>
            <div>Size: 30</div>
          </div>
        </div>
      </div>
      <div className="col pt-4">
        <div className="row">
          <h6 className="col">{props.price}</h6>
          <div className="col">
            <div className="row quant mb-4">
              <button className="m-0 col-2">-</button>{" "}
              <button className="m-0 col-4">1</button>{" "}
              <button className="m-0 col-2">+</button>
            </div>
          </div>
          <h6 className="col">{props.price}</h6>
        </div>
        <i
          className="fa-solid fa-x position-absolute clear opacity-50"
          onClick={() => {
            handleClear(props.id);
          }}
        ></i>
      </div>
    </div>
  );
}
