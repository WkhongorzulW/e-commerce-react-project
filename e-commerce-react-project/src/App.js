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

function App() {
  const [wishList, setWishList] = useState([]);
  const [hearT, setHeart] = useState(false);
  return (
    <div>
      <MainHeader
        wishList={wishList}
        setWishList={setWishList}
        hearT={hearT}
        setHeart={setHeart}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              wishList={wishList}
              setWishList={setWishList}
              hearT={hearT}
              setHeart={setHeart}
            />
          }
        />
        <Route path="/signup" element={<SignUpFunc />} />
        <Route path="/login" element={<LogInFunc />} />
        <Route path="/detail/:id" element={<LogInFunc />} />
      </Routes>

      <FooterFull />
    </div>
  );
}

export default App;
