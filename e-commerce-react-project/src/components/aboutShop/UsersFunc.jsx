function UsersFunc(props){
    return(
        <div className="user col p-4">
            <div className="row">
                <img src={props.userImage} className="col-3"/>
                <div className="col-8 mt-4 ms-4 blue-1">{props.userName}</div>
            </div>
            <div className="row user-com mt-2 blue-6 blue-1">{props.userComment}</div>
        </div>
    )
}

export default UsersFunc;