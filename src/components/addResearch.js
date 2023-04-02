import React, { useRef, useState } from "react";
import { contractContext } from "../App";
import shoodh from "../contracts/Shoodh.sol/Shoodh.json";
import { ethers } from "ethers";
const shoodhAddress = "0xf26fD86681FE837ffD9a495Ee72Bcd89b69e5dD5";

function AddResearch() {
  const { contracts } = React.useContext(contractContext);
  const uriRef = useRef();
  const idRef = useRef();
  const arrRef = useRef();

  const [uri, seturi] = useState(null);
  const [id, setid] = useState(null);
  const [arr2, setarr2] = useState(null);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function updateUser() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const signer = provider.getSigner();
      const shoodh = new ethers.Contract(shoodhAddress, shoodh.abi, signer);
      const transaction = await shoodh.createResearchPaper(uri, id, arr2);
      await transaction.wait();
    }

    const putrequest = async () => {
      await updateUser();
    };

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
                  ref={uriRef}
                  required
                  placeholder="Enter URI"
                  className="placeholder:opacity-70 rounded-full border-dashed border border-black px-6 py-2 text-black placeholder:text-black outline-none font-pSans text-xl placeholder:text-base  w-full"
                />
              </div>
            </div>
            <div className="">
              <div className="text-3xl font-semibold font-pSans">ID</div>
              <div className="border-1 border-dotted">
                <input
                  type="text"
                  ref={idRef}
                  required
                  placeholder="Id Continued"
                  className="placeholder:opacity-70 rounded-full border-dashed border border-black px-6 py-2 text-black placeholder:text-black outline-none font-pSans text-xl placeholder:text-base  w-full"
                />
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold font-pSans">
                References
              </div>
              <div className="border-1 border-dotted">
                <input
                  type="text"
                  ref={arrRef}
                  required
                  placeholder="Refrences"
                  className="placeholder:opacity-70 rounded-full border-dashed border border-black px-6 py-2 text-black placeholder:text-black outline-none font-pSans text-xl placeholder:text-base  w-full"
                />
              </div>
            </div>

            <div
              className="text-2xl font-pSans w-full cursor-pointer rounded-full bg-black text-white flex items-center justify-center py-4"
              onClick={() => {
                const uri = uriRef.current.value; //uri id
                const id = idRef.current.value; // id beech vali
                const arr = arrRef.current.value;
                // console.log(uri,id,arr.split(" "));
                let arr2 = arr.split(" "); //references
                // console.log(arr2);
                setarr2(arr2);
                setid(id);
                seturi(id);

                uriRef.current.value = "";
                idRef.current.value = "";
                arrRef.current.value = "";

                putrequest().then(() => {
                  console.log("creation of cont");
                });
              }}
            >
              {" "}
              Submit your research
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddResearch;
