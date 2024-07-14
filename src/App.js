
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
