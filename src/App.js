import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Matches } from "./components/Matches";
import { Results} from "./components/Results"
import { Points } from "./components/Points";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Matches></Matches>}></Route>
      <Route path="/points" element={<Points></Points>}></Route>
      <Route path="/results" element={<Results></Results>}></Route>
    </Routes>
  );
}

export default App;
