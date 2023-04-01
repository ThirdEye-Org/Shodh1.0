import React, { useState } from "react";
import profilebuilding2 from "./assets/profilebuilding2.png";
// import profileBuilding2 from "./assets/profileBuilding2.png";
import profileBuilding1 from "./assets/profileBuilding1.png";

function ValidateProperty() {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center container mx-auto font-pSans px-32 ">
      <div className="font-bold text-6xl  ">Validate Research</div>
      <div className="w-1/5 border-2 border-[#5A7BF3] mt-6" />
      <div className=" text-normal text-center text-[rgba(0,0,0,0.69)] mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni explicabo quisquam vitae nesciunt, sit delectus nobis sequi eius est voluptates fugit error ut. Beatae nemo voluptatem quam nihil dolores!lorem20

      </div>
      <div className="mt-12">
        <div className="flex space-x-5">
          <div
            className=" relative scale-[0.9] hover:scale-[1.1] transition-all ease-in duration-300 rounded-2xl "
            onMouseEnter={() => {
              setImg1(true);
            }}
            onMouseLeave={() => setImg1(false)}
          >
            <img src={profilebuilding2} alt="" className="  h-96 w-72" />
            {/* <div class="h-20 absolute bottom-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500"/> */}
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div
                className={`font-semibold transition-all duration-300 ease-in font-pSans text-xl z-[1] ${
                  img1 && "mb-6"
                }   text-white`}
              >
               Lorem ipsum
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
            className="relative scale-[0.9]  hover:scale-[1.1] transition-all ease-in duration-300 rounded-2xl "
            onMouseEnter={() => {
              setImg2(true);
            }}
            onMouseLeave={() => setImg2(false)}
          >
            <img src={profileBuilding1} alt="" className="  h-96 w-72" />

            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div
                className={`font-semibold transition-all duration-300 ease-in font-pSans text-xl z-[1] ${
                  img2 && "mb-6"
                }   text-white`}
              >
               lorem ipsum
              </div>
            </div>
            {img2 && (
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
            className="relative scale-[0.9] hover:scale-[1.1] transition-all ease-in duration-300 rounded-2xl "
            onMouseEnter={() => {
              setImg3(true);
            }}
            onMouseLeave={() => setImg3(false)}
          >
            <img src={profileBuilding1} alt="" className="  h-96 w-72" />
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
            <div className="absolute bottom-5 w-72 p-4 flex flex-col">
              <div
                className={`font-semibold transition-all duration-300 ease-in font-pSans text-xl z-[1] ${
                  img3 && "mb-6"
                }   text-white`}
              >
                Lorem Ipsum
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
