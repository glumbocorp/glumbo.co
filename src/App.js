import './App.css';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import logo from "./image/logo.png";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      </Routes>
      <image src={logo} alt={"glumbocorp logo"} height={"100"} width={"100"}></image>
     <div className={"bigboxholder"}>
        <div className={"bigbox"} id={"lbigbox"}>We know your address.</div>
        <div className={"bigbox"} id={"rbigbox"}>
          <div id={"shrinkcontainerrbb"}>
            <p>
              Find out how:
            </p>
            <button className={"flatbuttonm"}>
              Doxx Me
            </button>
          </div>
        </div>
     </div>
    </Router>
  );
}

export default App;
