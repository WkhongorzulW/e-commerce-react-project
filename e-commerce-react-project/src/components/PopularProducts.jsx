function PopularProductsFunc(props){
    return (
        <div className="col-3 card">
            <img className="row popular-product-image" src={props.productImage}></img>
            <div className="row">
                <div className="col-9">
                    <div>{props.productName}</div>
                    <div>{props.price}</div>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                </div>
                <div className="col-3"><i class="bi bi-cart-dash"></i></div>
            </div>
        </div>
    )
}

export default PopularProductsFunc;