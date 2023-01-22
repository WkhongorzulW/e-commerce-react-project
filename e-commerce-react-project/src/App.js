import "./App.css";
import "./Default.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainHeader from "./components/header/MainHeader";
import Home from "./components/pages/Home";
import FooterFull from "./components/footer/FooterFull";
import SignUpFunc from "./components/pages/SignUpFunc";
import LogInFunc from "./components/pages/LogInFunc";
import Cart from "./components/pages/Cart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DetailFunc from "./components/detailComponents/DetailFunc";

function App() {
  const [wishList, setWishList] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <MainHeader
        wishList={wishList}
        setWishList={setWishList}
        cart={cart}
        setCart={setCart}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              wishList={wishList}
              setWishList={setWishList}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/signup" element={<SignUpFunc />} />
        <Route path="/login" element={<LogInFunc />} />
        <Route path="/detailPage/:id" element={<DetailFunc />} />
        <Route
          path="/cartPage"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>

      <FooterFull />
    </div>
  );
}

export default App;
