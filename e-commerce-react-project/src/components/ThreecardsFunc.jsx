function AddTwoCartFunc(props) {
    return (
        <div className="card">
            <div className="row">
                <img className="col-6" src={props.productImage}></img>
                <div className="col-6">
                    <h4>{props.title}</h4>
                    <div>{props.price}</div>
                    <button>{props.addBtn}</button>
                </div>
            </div>
        </div>
    )
}

function ThreeCardsFunc(props) {
    return (
        <div className="card row mb-2">
            <img className="col-5 w-50" src={props.productImage} />
            <div className="col-5">
                <div>{props.title}</div>
                <div>{props.price}</div>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
            </div>
        </div>
    )
}

export { AddTwoCartFunc, ThreeCardsFunc };