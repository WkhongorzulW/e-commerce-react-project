function WishlistFunc(props){
    return(
        <div className="row" id={props.id}>
            <img className="col-4" src={props.productImage}/>
            <div className="col">
                <div>{props.productName}</div>
                <div>{props.price}</div>
            </div>
        </div>
    )
};

export default WishlistFunc;