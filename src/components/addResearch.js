import React from 'react'

function AddResearch() {
  return (
    <div className="h-[90vh] w-screen">
      <div className="flex justify-center items-center flex-col space-y-6 pt-12 ">
        <div className="font-pSans text-6xl font-semibold">
          Add Your Research
        </div>
        <div className="border border-b-2 w-1/4 border-[#5A7BF3]" />
        <div className="w-2/3 text-center opacity-70">
          To add your research on our platform, create an account and upload
          your paper. Our team will review it before publishing to ensure it
          meets our quality standards. We promote open access to knowledge and
          support collaboration among researchers.
        </div>
        <div className="flex flex-col space-y-6">
          <div className="mt-6 ">
            <div className="text-3xl font-semibold font-pSans">Token URI</div>
            <div className="border-1 border-dotted">
              <input
                type="text"
                placeholder="Enter URI"
                className="placeholder:opacity-70 rounded-full border-dashed border border-black px-6 py-2 text-black placeholder:text-black outline-none font-pSans text-xl placeholder:text-base  w-full"
              />
            </div>
          </div>
          <div className="">
            <div className="text-3xl font-semibold font-pSans">
              Your PDF Research Link
            </div>
            <div className="border-1 border-dotted">
              <input
                type="text"
                placeholder="Enter URI"
                className="placeholder:opacity-70 rounded-full border-dashed border border-black px-6 py-2 text-black placeholder:text-black outline-none font-pSans text-xl placeholder:text-base  w-full"
              />
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold font-pSans">
              Final Date Of Your Research
            </div>
            <div className="border-1 border-dotted">
              <input
                type="text"
                placeholder="Enter URI"
                className="placeholder:opacity-70 rounded-full border-dashed border border-black px-6 py-2 text-black placeholder:text-black outline-none font-pSans text-xl placeholder:text-base  w-full"
              />
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold font-pSans">Author Name</div>
            <div className="border-1 border-dotted">
              <input
                type="text"
                placeholder="Enter URI"
                className="placeholder:opacity-70 rounded-full border-dashed border border-black px-6 py-2 text-black placeholder:text-black outline-none font-pSans text-xl placeholder:text-base  w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddResearch