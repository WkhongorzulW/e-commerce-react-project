function AddTwoCartFunc(props) {
  return (
    <div className="row border rounded d-flex">
      <img className="col-6" src={props.productImage}></img>
      <div className="col-5 pt-5">
        <h5 className="medi-title mt-3">{props.title}</h5>
        <div className="my-4">{props.price}</div>
        <button className="add-to-cart">
          <div className="mt-1">{props.addBtn}</div>
          <div className="prod-basket p-0 pt-1 text-white">
            <i class="bi bi-cart-dash"></i>
          </div>
        </button>
      </div>
    </div>
  );
}

function ThreeCardsFunc(props) {
  return (
    <div className="row mb-2 border rounded">
      <img className="col-8" src={props.productImage} />
      <div className="col-4 pt-4">
        <div className="s-title">{props.title}</div>
        <div>{props.price}</div>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
      </div>
    </div>
  );
}

export { AddTwoCartFunc, ThreeCardsFunc };
