import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/shop" exact element={<Shop />} />
      <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
