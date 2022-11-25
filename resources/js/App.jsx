import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "../css/App.css";

import Welcome from "./Pages/Welcome";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

const WrApped = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export { App, WrApped };
