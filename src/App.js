import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Notifier from "./components/Notifier";

function App() {
  const title = useSelector((state) => state.title);
  const profile = useSelector((state) => state.firebase.profile);

  return (
    <div className="App">
      <Notifier />
      <Router>
        <Navbar title={title.value} profile={profile} />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
