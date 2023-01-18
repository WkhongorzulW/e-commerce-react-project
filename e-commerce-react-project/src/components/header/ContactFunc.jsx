function ContactFunc(props) {
  return (
    <div>
      <div className="row text-center contact inner-box mx-auto">
        <a className="col-4 black-1 fs-5">{props.help}</a>
        <div className="col-2"></div>
        <a className="col-3 text-end black-1 fs-5">
          <i class="fa-solid fa-location-dot"></i> {props.store}
        </a>
        <a className="col-3 text-end black-1 fs-5">
          <i class="fa-solid fa-truck"></i> {props.delivery}
        </a>
      </div>
    </div>
  );
}

export default ContactFunc;
