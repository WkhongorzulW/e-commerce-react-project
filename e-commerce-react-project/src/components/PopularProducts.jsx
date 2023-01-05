function PopularProductsFunc(props) {
  return (
    <div className="col-3 card">
      <img className="row popular-product-image" src={props.productImage}></img>
      <div className="row">
        <div className="col-9">
          <div>{props.productName}</div>
          <div className="price">{props.price}</div>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </div>
        <button className="col-2 prod-basket">
            <i class="bi bi-cart-dash d-block text-white"></i>
        </button>
      </div>
    </div>
  );
}

export default PopularProductsFunc;
