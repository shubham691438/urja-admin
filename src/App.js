import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Matches } from "./components/Matches";
import { Results } from "./components/Results";
import { Winners } from "./components/Winners";
import { UpcommingMatch } from "./components/UpcommingMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Matches></Matches>}></Route>
      <Route path="/results" element={<Results></Results>}></Route>
      <Route path="/upcomming-match" element={<UpcommingMatch/>}></Route>
    </Routes>
  );
}

export default App;
