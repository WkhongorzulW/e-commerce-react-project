function BlogFunc(props) {
  return (
      <div className="news col">
        <div className="row">
          <img src={props.productImage} className="col-7 blog-image" />
          <div className="col-5">
            <h5 className="date">{props.date}</h5>
            <h5 className="blog-title mt-3 mb-4">{props.title}</h5>
            <div className="mb-5">{props.text}</div>
            <div>{props.source}</div>
          </div>
        </div>
      </div>
  );
}

export default BlogFunc;
