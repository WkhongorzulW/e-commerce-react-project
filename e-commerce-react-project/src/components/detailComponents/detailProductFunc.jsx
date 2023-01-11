import { Rating } from "react-simple-star-rating";
import { useState } from "react";

function DetailProductFunc(props) {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    };
    return (
        <div>
            <div className="col">
                <img className="row" src={props.productImage}></img>
                <div className="row">
                    <img className="col" src={props.moreImage} />
                    <img className="col" src={props.moreImage} />
                </div>
            </div>

            <div className="col">
                <h2>{props.productName}</h2>
                <div>{props.price}</div>
                <div>
                    <Rating onClick={handleRating} /> {props.review}
                </div>
                <div>
                    {props.available} <span>{props.inStock}</span>
                </div>
                <div>{props.items}</div>
                <hr />
                <div>
                    {props.color} <span>{props.colorCircle}</span>{" "}
                    <span>{props.colorCircle}</span>
                </div>
                <div className="row">
                    <div className="col">{props.size}</div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default DetailProductFunc;