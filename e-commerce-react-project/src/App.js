import "./App.css";
import "./Default.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainHeader from "./components/header/MainHeader";
import Home from "./components/Home";
import FooterFull from "./components/footer/FooterFull";
import SignUpFunc from "./components/SignUpFunc";
import LogInFunc from "./components/LogInFunc";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DetailFunc from "./components/detailComponents/DetailFunc";
import DetailProductFunc from "./components/detailComponents/playGameDetail";

function App() {
  const [wishList, setWishList] = useState([]);
  return (
    <div>
      <MainHeader wishList={wishList} setWishList={setWishList} />

      <Routes>
        <Route
          path="/"
          element={<Home wishList={wishList} setWishList={setWishList} />}
        />
        <Route path="/signup" element={<SignUpFunc />} />
        <Route path="/login" element={<LogInFunc />} />
        <Route path="/detail/:id" element={<DetailFunc />} />
      </Routes>

      <FooterFull />
    </div>
  );
}

export default App;
