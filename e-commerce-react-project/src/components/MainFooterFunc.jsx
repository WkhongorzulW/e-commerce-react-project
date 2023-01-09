function MainFooterFunc(props){
    return(
        <div>
            <img src={props.logo} className="footer-logo mb-5"/>
            <div className="blue-2">{props.address}</div>
            <hr />
            <div className="black-4">
                {props.social}
            </div>
        </div>
    )
}

export default MainFooterFunc;