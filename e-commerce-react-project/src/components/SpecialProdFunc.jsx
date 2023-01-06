function SpecialProdFunc(props) {
    return (
        <div className={props.style}>
            <div className="row canon inner-box mx-auto">
                <div className="col-5">
                    <h1 className="title col-6">{props.title}</h1>
                    <button type="button" className="orange me-3">{props.shop}</button>
                    <button type="button">{props.view}</button>
                </div>
                <div className="col-3"></div>
                <img className="col-4 canon-image" src={props.productImage}></img>
                <div className="col-1">
                    <div className="orange canon-price">{props.price}</div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProdFunc;