function MainFooterFunc(props){
    return(
        <div>
            <img src={props.logo} className="footer-logo mb-5"/>
            <div className="blue-2">{props.address}</div>
            <hr  className="my-4 mt-5"/>
            <img className="black-4" src={props.social} />
        </div>
    )
}

function FooterNavFunc(props) {
    return (
      <div className="col">
        <div className="nav-title blue-2">{props.title}</div>
      </div>
    );
  }

export {FooterNavFunc, MainFooterFunc};