function SignUpFunc (props){
    <div className="col-8">
        <h2>{props.title}</h2>
    
        <form>
            <label>{props.nameLab}</label>
            <input className="form-control" type="text" name="name" placeholder={props.name}/>
            <label>{props.emailLab}</label>
            <input className="form-control" type="email" name="email" placeholder={props.email}/>
            <label>{props.passLab}</label>
            <input className="form-control" type="password" name="password" placeholder={props.pass}/>
            <div>{props.must}</div>
            <button>{props.btn}</button>
        </form>
        <div>{props.question} <a>{props.logIn}</a></div>
    </div>
}