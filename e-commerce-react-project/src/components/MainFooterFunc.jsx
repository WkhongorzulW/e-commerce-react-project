function MainFooterFunc(props){
    return(
        <div>
            <img src={props.logo} className="footer-logo mb-5"/>
            <div>{props.address}</div>
            <hr />
            <div>
                {props.social}
            </div>
        </div>
    )
}

export default MainFooterFunc;