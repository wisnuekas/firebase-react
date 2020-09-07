import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import Routes from "./components/Routes";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <div className="App">
      <Router>{auth.isEmpty ? <Routes /> : <Navbar2 />}</Router>
    </div>
  );
}

export default App;
