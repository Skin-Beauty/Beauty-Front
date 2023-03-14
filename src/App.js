import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CosmeticPage from "./pages/CosmeticPage";
import MyPage from "./pages/MyPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
        <Route exact path="/cosmetic" element={<CosmeticPage />}></Route>
        <Route exact path="/mypage" element={<MyPage />}></Route>
        <Route exact path="/result" element={<ResultPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
