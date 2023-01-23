import "bootstrap/dist/css/bootstrap.min.css";

import "./css/App.css";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/login" element={<LoginForm />} exact></Route>
          <Route path="/register" element={<RegisterForm />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
