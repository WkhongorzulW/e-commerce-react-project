import "./App.css";
import "./Default.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import SignUpFunc from "./components/SignUpFunc";
import LogInFunc from "./components/LogInFunc";
import { Routes, Route} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import {useState} from "react";

function App() {
  const [wishList, setWishList] = useState([]);
  return(
    <div>
      <MainHeader wishList={wishList} setWishList={setWishList} />

      <Routes>
        <Route path="/" element={<Home wishList={wishList} setWishList={setWishList} />} />
        <Route path="/signup" element={<SignUpFunc />} />
        <Route path="/login" element={<LogInFunc />} />
      </Routes>
    </div>
  )
}

export default App;
