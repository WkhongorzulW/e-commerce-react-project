import "./App.css";
import "./Default.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Home";
import SignUpFunc from "./components/SignUpFunc";
import LogInFunc from "./components/LogInFunc";
import {Link, Routes, Route} from "react-router-dom";

function App() {
  return(
    <div>
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>Sign Up</Link>
        <Link to={"/login"}>Log In</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpFunc />} />
        <Route path="/login" element={<LogInFunc />} />
      </Routes>
    </div>
  )
}

export default App;
