import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Categories from "./pages/categories";
import Login from "./pages/login";
import "./App.css";

import { HOME } from "./api";

function App() {
  const location = useLocation();
  const navigator = useNavigate();
  useEffect(() => {
    if (location.pathname !== "/login" && location.pathname !== "/categories") {
      navigator("/login");
    }
  }, [location]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(HOME);
        console.log(response);
      } catch (error) {
        alert("PLEASE CHECK THE CONNECTION WITH BACKEND API");
      }
    })();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
