function FirstProductFunc(props) {
  return (
      <div className="col card">
        <div className="row">
          <img className="col-5" src={props.productImage} />
          <div className="col">
            <div className="fw-bold pb-3">{props.productName}</div>
            <div>{props.items}</div>
          </div>
        </div>
      </div>
  );
}

export default FirstProductFunc;
