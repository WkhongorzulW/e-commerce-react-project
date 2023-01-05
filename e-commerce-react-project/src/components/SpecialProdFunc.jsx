function SpecialProdFunc(props){
    return(
        <div className="row canon">
            <div className="col-6">
                <h2>{props.title}</h2>
                <button type="button">{props.shop}</button>
                <button type="button">{props.view}</button>
            </div>
            <img className="col-4" src={props.productImage}></img>
        </div>
    )
}

export default SpecialProdFunc;