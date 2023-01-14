import { useState } from "react";
import DetailFunc from "./DetailFunc";

function RelatedCamFunc(props) {

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const [heart, setHeart] = useState(false);
    function popProductHandler(event) {
       setHeart(!heart)
    };

    const [viewIcon, setEye] = useState(false);
    function popProductEyeHandler(props) {
        setEye(!viewIcon)
    };


    return (
        <div className="col-3 cards border" id={props.id}>
            <img onClick={() => { setShow(!show) }} className="row popular-product-image" src={props.productImage}></img>

            <button id={props.id} className="heart border-0" onClick={(e) => { popProductHandler(e) }}>{heart ? props.heart : props.fullHeart}</button>

            <div className="row bottom m-2">
                <div className="col-12">
                    <div className="row related-cam-btns">
                        <button className="col me-3 border-0 fw-bold black-5">
                            {props.addToCart} <span className="rounded-circle prod-basket orange ms-2">{props.cartIcon}</span>
                        </button>
                        <button className="col-3 border-0 black-5" onClick={() => { popProductEyeHandler(props) }}>{viewIcon ? props.viewIcon : props.viewedIcon}</button>
                    </div>
                </div>
            </div>

            <DetailFunc show={show} fullscreen={fullscreen} setShow={setShow} />
        </div>
    )
}

export default RelatedCamFunc;