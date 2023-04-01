// import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ValidateProperty from "./components/validateProperty";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  
  return (
    <div className="bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Profile/>}/>
          <Route path="/validate" element={<ValidateProperty/>}/>
          {/* <Profile /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
