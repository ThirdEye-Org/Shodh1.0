// import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Validator from "./components/Validator";
import Profile from "./components/Profile";
import ValidateProperty from "./components/validateProperty";
import React, { useState, useEffect } from "react";

import { ethers } from "ethers";
import verifierNFT from "./contracts/VerifierNFT.sol/VerifierNFT.json";
import researchPaperNFT from "./contracts/ResearchPaperNFT.sol/ResearchPaper.json";
import shoodh from "./contracts/Shoodh.sol/Shoodh.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddResearch from "./components/addResearch";
export const contractContext = React.createContext();
const verifierNFTAddress = "0x28Bb85f8103C7B27DA9d21DC98d5537C5Af42483";
const researchPaperNFTAddress = "0xF040770EA2b58aad7590041c478E4BB01eFeAcdd";
const shoodhAddress = "0xf26fD86681FE837ffD9a495Ee72Bcd89b69e5dD5";

function App() {
  const [contracts, setContracts] = useState({
    verifiernft: null,
    researchPapernft: null,
    shoodh: null,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState(null);
  const [contri , setContri] = useState(0);
  const [research , setResearch] = useState(0);
  const [researchNFT , setResearchNFT] = useState([]);


  async function readContracts() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log("provider", provider);
        const verifiercontract = new ethers.Contract(
          verifierNFTAddress,
          verifierNFT.abi,
          provider
        );
        console.log("verifiercontract", verifiercontract);
        const researchNFTcontract = new ethers.Contract(
          researchPaperNFTAddress,
          researchPaperNFT.abi,
          provider
        );
        console.log("researchNFTcontract", researchNFTcontract);
        const shoodhcontract = new ethers.Contract(
          shoodhAddress,
          shoodh.abi,
          provider
        );
        console.log("shoodhcontract", shoodhcontract);
        setContracts({
          verifiernft: verifiercontract,
          researchPapernft: researchNFTcontract,
          shoodh: shoodhcontract,
        });
      } catch (err) {
        console.log("Error: ", err);
        alert(
          "Switch your MetaMask network to Polygon zkEVM testnet and refresh this page!"
        );
      }
    }
  }
  useEffect(() => {
    // declare the data fetching function
    const fetchContracts = async () => {
      const contracts_data = await readContracts();
      return contracts_data;
    };

    fetchContracts().catch(console.error);
  }, []);

  return (
    <contractContext.Provider value={{contracts,loggedIn,account,setAccount,setLoggedIn,contri,setContri,research,setResearch,researchNFT,setResearchNFT}}>

    <div className="bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/validate" element={<ValidateProperty />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/validator" element={<Validator />} />
          <Route path="/addnew" element={<AddResearch/>} />
          {/* <Profile /> */}
        </Routes>
      </Router>
    </div>
    </contractContext.Provider>
  );
}

export default App;
