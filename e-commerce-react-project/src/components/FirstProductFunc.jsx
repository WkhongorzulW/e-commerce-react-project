function FirstProductFunc(props){
    return(
        <div className="col-2 card mx-2 p-2 inner-box">
            <div className="row">
                <img className="col" src={props.productImage}/>
                <div className="col">
                    <div className="fw-bold">{props.productName}</div>
                    <div>{props.items}</div>
                </div>
            </div>
        </div>
    )
}

export default FirstProductFunc;