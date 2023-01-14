function ReviewsFunc(props){
    return(
        <div className="inner-box reviews">
            <h3 className="blue-1 fw-bold">{props.title}</h3>
            <div className="my-4">{props.rev}</div>
            <button className="border-0">{props.revBtn}</button>
        </div>
    )
};

export default ReviewsFunc;