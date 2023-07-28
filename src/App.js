import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Single from "./pages/Single";
import Profile from "./pages/Profile";
import Connect from "./pages/Connect";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/shop" exact element={<Shop />} />
      <Route path="/single" exact element={<Single />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/connect" exact element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;
