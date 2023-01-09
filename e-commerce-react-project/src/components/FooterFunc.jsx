function FooterTopFunc(props) {
  return (
    <div className="row">
      <h2 className="col-5 title blue-2">{props.title}</h2>
      <button className="col orange">
        {props.email} {props.emailIcon}
      </button>
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
