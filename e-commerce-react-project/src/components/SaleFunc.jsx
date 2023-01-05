function SaleFunc(props){
    return(
        <div className="card">
            <img className="card-img" src={props.productImage}></img>
            <div className="card-img-overlay">
                <button className="orange">{props.newBtn}</button>
                <h1 className="title my-3">{props.salesPr}</h1>
                <div className="text-white">{props.description}</div>
                <button className="orange mt-3">{props.shopBtn}</button>
            </div>
        </div>
    )
}

export default SaleFunc;