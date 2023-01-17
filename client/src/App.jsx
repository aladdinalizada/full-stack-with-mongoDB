import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>404, Page Not Found........</div>} />
      </Routes>
    </div>
  );
}

export default App;
