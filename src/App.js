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
export const contractContext = React.createContext();
const verifierNFTAddress = "0x08e9CADc107893c306DFA3fc77525cAFB1116935";
const researchPaperNFTAddress = "0x719974E1565d5F36606Ec2Bc56c419c9CA995345";
const shoodhAddress = "0xD975Bfc13f54AD4c8Ce291F5e9434374056b99c3";

function App() {
  const [contracts, setContracts] = useState({
    verifiernft: null,
    researchPapernft: null,
    shoodh: null,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState(null);

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
    <contractContext.Provider value={{contracts,loggedIn,account,setAccount,setLoggedIn}}>

    <div className="bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/validate" element={<ValidateProperty />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/validator" element={<Validator />} />
          {/* <Profile /> */}
        </Routes>
      </Router>
    </div>
    </contractContext.Provider>
  );
}

export default App;
