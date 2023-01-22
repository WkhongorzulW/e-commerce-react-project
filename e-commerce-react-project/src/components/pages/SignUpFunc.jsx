import SignUp from "../header/SignUp";
import { signUp } from "../Data";

export default function SignUpFunc() {
  const Signup = signUp.map((user) => {
    return (
      <SignUp
        title={user.title}
        nameLab={user.nameLab}
        name={user.name}
        emailLab={user.emailLab}
        email={user.email}
        passLab={user.passLab}
        pass={user.pass}
        must={user.must}
        btn={user.btn}
        question={user.question}
        logIn={user.logIn}
      />
    );
  });
  return <div>{Signup}</div>;
}
