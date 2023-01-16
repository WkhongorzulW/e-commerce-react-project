export default function Login(props) {
    return (
        <div className="row my-5">
            <div className="col-4 mx-auto">
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
                    <br />
                    <button className="purple-btn py-2 fw-bold border-0">{props.logIn}</button>
                </form>
            </div>
        </div>
    )
};