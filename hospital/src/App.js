import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./component/Nav";
import Signup from "./component/Signup";
import Admin from "./Admin";
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/admin" element={<Admin/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;