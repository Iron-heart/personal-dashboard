import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MiniDrawer from "./components/Drawer/MiniDrawer";

function App() {
  return (
    <Router>
      <MiniDrawer />
    </Router>
  );
}

export default App;
