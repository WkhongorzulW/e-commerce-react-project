function AboutFunc(props){
    return(
        <div className="col-4">
            <div className="row px-4">
            <div className="col-4">{props.icon}</div>
            <div className="col-8 blue-1">
                <div className="del-title">{props.title}</div>
                <div>{props.text}</div>
            </div>
            </div>
        </div>
    )
}

export default AboutFunc;