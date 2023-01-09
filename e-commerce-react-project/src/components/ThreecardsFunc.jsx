function AddTwoCartFunc(props) {
  return (
    <div className="row border rounded d-flex">
      <img className="col-6" src={props.productImage}></img>
      <div className="col-5 pt-5">
        <h5 className="medi-title mt-3 blue-1">{props.title}</h5>
        <div className="my-4 black-3">{props.price}</div>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <button className="add-to-cart">
          <div className="mt-1">{props.addBtn}</div>
          <div className="prod-basket p-0 pt-1 text-white orange">
          <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </button>
      </div>
    </div>
  );
}

function ThreeCardsFunc(props) {
  return (
    <div className="row border rounded mb-2 two-card">
      <img className="col-7" src={props.productImage} />
      <div className="col pt-4">
        <div className="s-title blue-1">{props.title}</div>
        <div className="black-4">{props.price}</div>
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
