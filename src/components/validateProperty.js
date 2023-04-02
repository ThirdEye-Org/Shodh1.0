import React, { useState } from "react";
import profilebuilding2 from "./assets/profilebuilding2.png";
import SocialMedia from "./assets/SocialMedia.jpg";
import ClimateChange from "./assets/ClimateChange.jpg";
import MusicAndLearning from "./assets/MusicAndLearning.jpg";
// import profileBuilding2 from "./assets/profileBuilding2.png";
import profileBuilding1 from "./assets/profileBuilding1.png";
import shoodh from "../contracts/Shoodh.sol/Shoodh.json";
import { ethers } from "ethers";
const shoodhAddress = "0xf26fD86681FE837ffD9a495Ee72Bcd89b69e5dD5";

function ValidateProperty() {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);

  async function validatenftfunc() {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const signer = provider.getSigner();
      console.log(signer);
      const shoodh1 = new ethers.Contract(shoodhAddress, shoodh.abi, signer);
      console.log(shoodh1);
      // console.log(typeof())
      const transaction = await shoodh1.verifyResearch(0, 0);
      await transaction.wait();
      console.log("gg");
      // console.log(transaction)
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center container mx-auto font-pSans px-32 ">
      <div className="font-bold text-6xl  ">Validate Research</div>
      <div className="w-1/5 border-2 border-[#5A7BF3] mt-6" />
      <div className=" text-normal text-center text-[rgba(0,0,0,0.69)] mt-6">
        Here you can verify the researches you feel like they are valid, and
        ensure that they meet the highest standards of quality and rigor.
        Verification of research is a critical step in the scientific process,
        as it helps to establish the credibility of the findings and the
        integrity of the researchers who conducted the study.
      </div>
      <div className="mt-12">
        <div className="flex space-x-5">
          <div
            className=" relative scale-[0.9] hover:scale-[1.1] transition-all ease-in duration-300 rounded-2xl  "
            onMouseEnter={() => {
              setImg1(true);
            }}
            onMouseLeave={() => setImg1(false)}
          >
            <img
              src={MusicAndLearning}
              alt=""
              className="  h-96 w-72 rounded-2xl"
            />
            {/* <div class="h-20 absolute bottom-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500"/> */}
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div
                className={`font-semibold transition-all duration-300 ease-in font-pSans text-xl z-[1] ${
                  img1 && "mb-6"
                }   text-white`}
              >
                Investigating the Effect of Music on Memory and Learning
              </div>
            </div>
            {img1 && (
              <div className=" absolute z-[1] -bottom-10  space-x-12 left-10 flex ">
                <div className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center text-white text-3xl bg-[#5A7BF3]">
                  &#x2714;
                </div>
                <div className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center text-[#5A7BF3] text-4xl bg-white border-2 border-[#5A7BF3]">
                  &#10006;
                </div>
              </div>
            )}
          </div>
          <div
            className="relative scale-[0.9]  hover:scale-[1.1] transition-all ease-in duration-300 rounded-2xl  "
            onMouseEnter={() => {
              setImg2(true);
            }}
            onMouseLeave={() => setImg2(false)}
          >
            <img src={SocialMedia} alt="" className="  h-96 w-72 rounded-2xl" />

            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl   h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div
                className={`font-semibold transition-all duration-300 ease-in font-pSans text-xl z-[1] ${
                  img2 && "mb-6"
                }   text-white`}
              >
                The Effect of Social Media on Body Image Perception Among Young
                Adults
              </div>
            </div>
            {img2 && (
              <div className=" absolute z-[1] -bottom-10  space-x-12 left-10 flex ">
                <div
                  className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center text-white text-3xl bg-[#5A7BF3]"
                  onClick={validatenftfunc}
                >
                  &#x2714;
                </div>
                <div className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center text-[#5A7BF3] text-4xl bg-white border-2 border-[#5A7BF3]">
                  &#10006;
                </div>
              </div>
            )}
          </div>
          <div
            className="relative scale-[0.9] hover:scale-[1.1] transition-all ease-in duration-300 rounded-2xl  "
            onMouseEnter={() => {
              setImg3(true);
            }}
            onMouseLeave={() => setImg3(false)}
          >
            <img
              src={ClimateChange}
              alt=""
              className="  h-96 w-72 rounded-2xl"
            />
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div
                className={`font-semibold transition-all duration-300 ease-in font-pSans text-xl z-[1] ${
                  img3 && "mb-6"
                }   text-white`}
              >
                Assessing the Impact of Climate Change on Coastal Ecosystems
              </div>
            </div>
            {img3 && (
              <div className=" absolute z-[1] -bottom-10  space-x-12 left-10 flex ">
                <div className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center text-white text-3xl bg-[#5A7BF3]">
                  &#x2714;
                </div>
                <div className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center text-[#5A7BF3] text-4xl bg-white border-2 border-[#5A7BF3]">
                  &#10006;
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidateProperty;
