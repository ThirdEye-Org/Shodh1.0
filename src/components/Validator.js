import React from "react";
import Penthouse from "./assets/research.jpg";
const Validator = () => {
  return (
    <div className="p-10 py-8 max-h-[80%] w-screen ">
      <div className="h-full w-full rounded-3xl bg-slate-200 px-48 flex gap-16">
        <div className="h-4/5 w-2/5">
          <img src={Penthouse} alt="Image" className="rounded-xl object-cover h-1/2" />
        </div>
        <div className="h-full w-3/5 flex flex-col gap-4 font-pSans py-16 ">
          <div className="text-4xl font-bold">
            <span>
              Smarter farming in the developing world via the Internet of Things
            </span>
          </div>
          <div className="text-base text-black/[69] italic">
            <span>International Journal of Cloud Computing</span>
          </div>
          <div className="flex w-full items-center justify-between pr-48 h-max">
            <div className="flex flex-col gap-2 items-center justify-center  border-black/50">
              <div className="text-4xl text-black/[79] font-semibold">Ansh</div>
              <div className="text-2xl text-black/[69]">author</div>
            </div>
            <span className="h-16 w-[1px] bg-black/50">&nbsp;</span>
            <div className="flex flex-col gap-2 items-center  border-black/50">
                <div className="text-4xl text-black/[79] font-semibold">2207</div>
                <div className="text-2xl text-black/[69]">Views</div>
            </div>
            {/* <span className="h-16 w-[1px] bg-black/50">&nbsp;</span>
            <div className="flex flex-col gap-2 items-center  border-black/50">
                <div className="text-4xl text-black/[79] font-semibold">2207</div>
                <div className="text-2xl text-black/[69]">sq ft area</div>
            </div> */}
            <span className="h-16 w-[1px] bg-black/50">&nbsp;</span>
            <div className="flex flex-col gap-2 items-center ">
              <div className="text-4xl text-black/[79] font-semibold">
                https...//
              </div>
              <div className="text-2xl text-black/[69]">Link</div>
            </div>
          </div>
          <div className="flex w-full justify-around py-6">
            <div className="p-4 px-20 flex gap-4 items-center text-white  bg-[#5A7BF3] fill-white  rounded-xl hover:bg-blue-700">
              <svg
                width="21"
                height="26"
                viewBox="0 0 21 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-inherit"
              >
                <path
                  d="M8.9375 17.4404L16 10.3779L14.2188 8.59665L8.9375 13.8779L6.3125 11.2529L4.53125 13.0341L8.9375 17.4404ZM10.25 25.5029C7.35417 24.7737 4.96375 23.1121 3.07875 20.5179C1.19375 17.9237 0.250833 15.0437 0.25 11.8779V4.2529L10.25 0.502899L20.25 4.2529V11.8779C20.25 15.0446 19.3071 17.925 17.4212 20.5191C15.5354 23.1133 13.145 24.7746 10.25 25.5029Z"
                />
              </svg>
              <span className="font-pSans text-3xl">Verify</span>
            </div>
             <div className="p-4 px-20  items-center border-4  border-[#5A7BF3] text-[#5A7BF3] rounded-xl  hover:text-white hover:bg-[#5A7BF3]">
              <span className="font-pSans text-3xl">More Details</span>
            </div>
          </div>
          <div className="font-pSans">
            <div className="text-4xl font-semibold pb-6">Refrences</div>
            <div className="px-6 text-2xl flex flex-col gap-2">
                <div className="">
                &gt; Output-queued shared memory designs
                </div>
                <div className="">
                &gt; The authors’ editor: working with authors
                </div>
                <div className="">
                &gt; Proofs and Theorems
                </div>
                <div className="">
                &gt; Factors for sustaining the use of knowledge
                </div>
                <div className="">
                &gt; Writing and Publishing a Research Paper
                </div>
                <div className="">
                &gt; Research for hackathons
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validator;
