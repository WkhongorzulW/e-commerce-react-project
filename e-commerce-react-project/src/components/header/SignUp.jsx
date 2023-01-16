function SignUp(props) {
    return (
        <div>
            <div className="col-4 mx-auto my-5">
                <h2 className="fw-bold mb-5">{props.title}</h2>

                <form>
                    <label htmlFor="name">{props.nameLab}</label>
                    <br />
                    <input className="form-control" type="text" name="name" placeholder={props.name} />
                    <br />
                    <label htmlFor="email">{props.emailLab}</label>
                    <br />
                    <input className="form-control" type="email" name="email" placeholder={props.email} />
                    <br />
                    <label htmlFor="password">{props.passLab}</label>
                    <br />
                    <input className="form-control" type="password" name="password" placeholder={props.pass} />
                    <div className="text-secondary">{props.must}</div>
                    <br />
                    <button className="purple-btn fw-bold py-2 border-0">{props.btn}</button>
                </form>
                <div className="black-6 text-center mt-3">{props.question} <a className="purple text-decoration-none fw-bold">{props.logIn}</a></div>
            </div>
        </div>
    )
}

export default SignUp;