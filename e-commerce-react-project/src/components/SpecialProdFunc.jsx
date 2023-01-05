function SpecialProdFunc(props){
    return(
        <div className="row canon inner-box mx-auto">
            <div className="col-6">
                <h1 className="blue big-title">{props.title}</h1>
                <button type="button">{props.shop}</button>
                <button type="button">{props.view}</button>
                <div>
                    <div className="slider orange"></div>
                    <div className="slider orange"></div>
                    <div className="slider orange"></div>
                </div>
            </div>
            <div className="col-2"></div>
            <img className="col-3 canon-image" src={props.productImage}></img>
            <div className="orange canon-price col-1">{props.price}</div>
        </div>
    )
}

export default SpecialProdFunc;