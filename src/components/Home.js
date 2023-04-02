import React from 'react'
import SocialMedia from "./assets/SocialMedia.jpg";
import ClimateChange from "./assets/ClimateChange.jpg";
import MusicAndLearning from "./assets/MusicAndLearning.jpg";
function Home() {
  return (
    <div className="container  mx-auto mt-12 mb-10">
      <div className="pt-12 rounded-3xl items-center justify-center py-20 bg-[#F7F7F7]">
        <div className="flex items-center justify-center text-5xl font-publica">
          Explore our Top Research Papers
        </div>
        <div className="text-sm font-pSans w-2/3 text-center flex items-center mx-auto justify-center mt-4">
          According to our analytics, These papers have garnered significant
          attention. In terms of popularity and engagement, We are pleased to
          present the most successful research papers. The following studies
          have generated a considerable amount of interest. Our platform is
          proud to feature these top-performing research papers.
        </div>
        <div className="flex flex-row mt-12 space-x-10 items-center justify-center">
          <div className="relative w-max overflow-hidden rounded-2xl hover:scale-110 transition-all hover:shadow-md hover:shadow-black">
            <img
              src={SocialMedia}
              alt=""
              className="  h-96 w-72 object-cover brightness-50"
            />
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div className="font-semibold  font-pSans text-xl z-[1] text-white">
                The Effect of Social Media on Body Image Perception Among Young
                Adults
              </div>
              <div className=" text-[rgba(255,255,255,0.79)] font-pSans text-xs italic font-light">
                Verified
              </div>
            </div>
          </div>
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
          <div className="relative w-max overflow-hidden rounded-2xl hover:scale-110 transition-all hover:shadow-md hover:shadow-black">
            <img
              src={MusicAndLearning}
              alt=""
              className="  h-96 w-72 brightness-50"
            />
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
        <div className="flex items-center justify-center  ">
          <div className="bg-[#5A7BF3] text-xl md:text-2xl font-bold rounded-full py-3 px-4 text-white mt-12  w-2/5 flex items-center justify-center">
            Explore More Researches
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home