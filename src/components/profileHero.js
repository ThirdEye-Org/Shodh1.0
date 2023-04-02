import React, { useState } from "react";
import SocialMedia from "./assets/SocialMedia.jpg";
import ClimateChange from "./assets/ClimateChange.jpg";
import MusicAndLearning from "./assets/MusicAndLearning.jpg";
import { ethers } from "ethers";

// import Modal from "./Modal";
// import Property from "./property";

import { contractContext } from "../App";
import { resetWarningCache } from "prop-types";
function ProfileHero() {
  const {
    account,
    contracts,
    setContri,
    setResearch,
    researchNFT,
    setResearchNFT,
  } = React.useContext(contractContext);
  let var1 = [];
  // const { researchNFT } = React.useContext(contractContext);
  async function readUserdetails() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("provider", provider);
      const cont = contracts.shoodh;
      try {
        const datacontri = await cont.contributions(account);
        console.log("User Contribution in ETH: ", datacontri.toString());
        setContri(datacontri.toNumber());
        const datanoresearch = await cont.noResearch(account);
        setResearch(datanoresearch.toString());
        console.log("User no of researches: ", datanoresearch.toString());
        const researchArr = await cont.getResearches(account);
        console.log("User Research NFT IDs: ", researchArr);
        researchArr.map(async (e) => {
          const tokenid = e.toString();
          const tokenuri = await contracts.researchPapernft.tokenURI(tokenid);
          console.log(tokenuri);

          const obj1 = {
            "tokenId": tokenid,
            "tokenUri": tokenuri
          }
          const arr1 = researchNFT;
          arr1.push(obj1)
              
           setResearchNFT(arr1);
           console.log(researchNFT);
          })
      } catch (err) {
        console.log("Error: ", err);
        alert(
          "Switch your MetaMask network to Polygon zkEVM testnet and refresh this page!"
        );
      }
    }
  }
  const [isrecieved, setIsrecieved] = React.useState(false);
  // Sol(researchNFT[0])
  // console.log(researchNFT)
  
  // React.useEffect(() => {
    // researchNFT.forEach(element => {
    //   console.log(element)
    //   sol(element)
    // });
    // const newarr=researchNFT;
    const sol1 = async () => {
      // console.log(researchNFT)
      const res = await fetch(researchNFT[0].tokenUri, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const result = await res.json();
      console.log(result);
      setIsrecieved(true);
      if (isrecieved) var1.push(result);
    };
    const sol2 = async (obj1) => {
      const res = await fetch(researchNFT[1].tokenUri, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const result = await res.json();
      console.log(result);
      setIsrecieved(true);
      if (isrecieved) var1.push(result);
    };
    
    React.useEffect(()=>{
      sol1();
      sol2();
      contracts && readUserdetails();
    },[contracts, readUserdetails])
  // }, [isrecieved,researchNFT,var1]);
  return (
    <>
      {/* {
      isModal &&
      <Modal children={<Property/>} handlemodal={handlemodal}/>
    } */}
      <div className="flex flex-col h-screen justify-center">
        <div className="font-pSans font-extrabold text-6xl">
          {" "}
          Your Researches
        </div>
        <div className="ds border-b-2 border-[#5A7BF3] w-1/2 mt-5" />
        <div className="font-pSans font-normal text-[rgba(0,0,0,0.69)] text-base w-3/4 mt-5">
          These are your researches, and they represent a significant
          contribution to the body of knowledge in your field. Your researches
          demonstrate your commitment to exploring new ideas, pushing
          boundaries, and advancing the frontiers of knowledge.
        </div>
        <div className="flex flex-row mt-16 space-x-10">
          {isrecieved &&
            var1.map((ele) => (
              <div className="relative w-max overflow-hidden rounded-2xl hover:scale-110 transition-all hover:shadow-md hover:shadow-black">
                <img
                  src={ClimateChange}
                  alt=""
                  className="  h-96 w-72 brightness-50"
                />
                <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
                <div className="absolute bottom-5 w-72 p-4 flex flex-col">
                  <div className="font-semibold  font-pSans text-xl z-[1]   text-white">
                    Assessing the Impact of Climate Change on Coastal Ecosystems
                  </div>
                  <div className=" text-[rgba(255,255,255,0.79)] font-pSans text-xs italic font-light">
                    Not Validated
                  </div>
                </div>
              </div>
            ))}

          {/* <div className="relative w-max overflow-hidden rounded-2xl hover:scale-110 transition-all hover:shadow-md hover:shadow-black">
            <img src={ClimateChange} alt="" className="  h-96 w-72 brightness-50" />
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div className="font-semibold  font-pSans text-xl z-[1]   text-white">
              Assessing the Impact of Climate Change on Coastal Ecosystems
              </div>
              <div className=" text-[rgba(255,255,255,0.79)] font-pSans text-xs italic font-light">
                Not Validated
              </div>
            </div>
          </div>
          <div className="relative w-max overflow-hidden rounded-2xl hover:scale-110 transition-all hover:shadow-md hover:shadow-black">
            <img src={MusicAndLearning} alt="" className="  h-96 w-72 brightness-50" />
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div className="font-semibold  font-pSans text-xl z-[1]   text-white">
              Investigating the Effect of Music on Memory and Learning
              </div>
              <div className=" text-[rgba(255,255,255,0.79)] font-pSans text-xs italic font-light">
                Validated
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProfileHero;
