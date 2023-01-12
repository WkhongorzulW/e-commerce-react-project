function ReviewsFunc(props){
    return(
        <div className="inner-box reviews">
            <h3>{props.title}</h3>
            <div className="my-4">{props.rev}</div>
            <button className="border-0">{props.revBtn}</button>
        </div>
    )
};

export default ReviewsFunc;