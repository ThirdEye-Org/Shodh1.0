// import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ValidateProperty from "./components/validateProperty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Profile />} />
          <Route path="/validate" element={<ValidateProperty />} />
          <Route path="/home" element={<Home />} />
          {/* <Profile /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
