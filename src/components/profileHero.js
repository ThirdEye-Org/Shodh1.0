import React, { useState } from "react";
import SocialMedia from "./assets/SocialMedia.jpg";
import ClimateChange from "./assets/ClimateChange.jpg";
import MusicAndLearning from "./assets/MusicAndLearning.jpg";
// import Modal from "./Modal";
// import Property from "./property";
function ProfileHero() {
  const [isModal, setIsModal] = useState(false)
  const handlemodal = () => {
    setIsModal(!isModal)
  }
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
          These are your researches, and they represent a significant contribution to the body of knowledge in your field. Your researches demonstrate your commitment to exploring new ideas, pushing boundaries, and advancing the frontiers of knowledge.
        </div>
        <div className="flex flex-row mt-16 space-x-10">
          <div
            className="relative w-max overflow-hidden rounded-2xl hover:scale-110 transition-all hover:shadow-md hover:shadow-black"
            onClick={handlemodal}
          >
            <img src={SocialMedia} alt="" className="  h-96 w-72 object-cover brightness-50" />
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div className="font-semibold  font-pSans text-xl z-[1] text-white">
              The Effect of Social Media on Body Image Perception Among Young Adults
              </div>
              <div className=" text-[rgba(255,255,255,0.79)] font-pSans text-xs italic font-light">
                Verified
              </div>
            </div>
          </div>
          <div className="relative w-max overflow-hidden rounded-2xl hover:scale-110 transition-all hover:shadow-md hover:shadow-black">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHero;
