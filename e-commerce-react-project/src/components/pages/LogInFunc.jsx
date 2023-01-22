import Login from "../header/Login";
import { logIn } from "../Data";

export default function LogInFunc() {
  const login = logIn.map((user) => {
    return (
      <Login
        title={user.title}
        nameLab={user.nameLab}
        name={user.name}
        emailLab={user.emailLab}
        email={user.email}
        passLab={user.passLab}
        pass={user.pass}
        logIn={user.logIn}
      />
    );
  });
  return <div>{login}</div>;
}
