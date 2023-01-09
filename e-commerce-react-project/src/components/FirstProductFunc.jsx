function FirstProductFunc(props) {
  return (
      <div className="col card">
        <div className="row">
          <img className="col-5" src={props.productImage} />
          <div className="col">
            <div className="fw-bold pb-3 blue-2">{props.productName}</div>
            <div className="blue-3">{props.items}</div>
          </div>
        </div>
      </div>
  );
}

export default FirstProductFunc;
