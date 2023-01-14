function SpecialProdFunc(props) {
    return (
        <div className={props.style}>
            <div className="row canon inner-box mx-auto">
                <div className="col-5">
                    <h1 className="fs-1 fw-bold col-6 blue-2">{props.title}</h1>
                    <button type="button" className="orange me-3 fw-semibold">{props.shop}</button>
                    <button type="button" className="bg-white blue-7 fw-semibold">{props.view}</button>
                </div>
                <div className="col-3"></div>
                <img className="col-4 canon-image" src={props.productImage}></img>
                <div className="col-1">
                    <div className="orange canon-price fw-semibold">{props.price}</div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProdFunc;