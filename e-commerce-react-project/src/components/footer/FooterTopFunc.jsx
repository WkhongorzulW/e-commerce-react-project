function FooterTopFunc(props) {
  return (
    <div className="row">
      <h2 className="col-5 title blue-2">{props.title}</h2>
      <div className="col">
        <div className="row">
          <input className="col-9 input orange" type="text" placeholder={props.email} />
          <button type="text" className="col orange">
            {props.emailIcon}
          </button>
        </div>
      </div>
      <div className="col-1"></div>
      <div className="col-3">
        <div className="row">
          <div className="col-4 hph">{props.hPhoneIcon}</div>
          <div className="col-8">
            {props.text} {props.phNumber}
          </div>
        </div>
      </div>
    </div>
  );
}

export { FooterTopFunc };
