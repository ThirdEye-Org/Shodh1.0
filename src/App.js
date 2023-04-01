// import { useState } from "react";
import Navbar from "./components/Navbar";
import Validator from "./components/Validator";
import Profile from "./components/Profile";
import ValidateProperty from "./components/validateProperty";

function App() {
  
  return (
    <div className="bg-white overflow-x-hidden h-screen">
      <Navbar />
      {/* <ValidateProperty /> */}
      <Validator />
    </div>
  );
}

export default App;
