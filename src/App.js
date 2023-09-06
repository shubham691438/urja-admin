import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Matches } from "./components/Matches";
import { Points } from "./components/Points";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Matches></Matches>}></Route>
      <Route path="/points" element={<Points></Points>}></Route>
    </Routes>
  );
}

export default App;
