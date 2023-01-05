function ContactFunc(props){
    return (
        <div>
            <div className="row text-center contact inner-box mx-auto">
                <a className="col-4">{props.help}</a>
                <div className="col-3"></div>
                <a className="col-2"><i class="bi bi-geo-alt"></i> {props.store}</a>
                <a className="col-3"><i class="bi bi-truck"></i> {props.delivery}</a>
            </div>
        </div>
    )
}

export default ContactFunc;