import React from "react";
import { contractContext } from "../App";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Web3 from "web3";

const Navbar = () => {
  const [address, setAddress] = useState(null);
  const [logedin, setLogedin] = useState(false);
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const accounts = await provider.listAccounts();
    setAddress(accounts[0]);
    console.log(accounts[0]);
    setLogedin(true);
  }
  const { contracts, loggedIn, setLoggedIn, account, setAccount } =
    React.useContext(contractContext);

  return (
    <div className="h-max w-screen  flex justify-between items-center py-4 px-8 font-pSans">
      <div className="flex gap-2 h-full items-center justify-center">
        <Link to="/" className="flex space-x-1">
          <svg
            width="55"
            height="55"
            viewBox="0 0 77 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className=""
          >
            <rect
              x="6"
              y="3"
              width="65.102"
              height="65"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_6_34"
                  transform="scale(0.0015674 0.00156986)"
                />
              </pattern>
              <image
                id="image0_6_34"
                width="638"
                height="637"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAn4AAAJ9CAYAAACrRH/OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0yNVQwMToxMzoyNCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0yNVQwMToxMzoyNCswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMjVUMDE6MTM6MjQrMDU6MzAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjZiM2I0ZDMtOTkxYi1mZDRjLTllNGMtZGFlYTAyZjkwNDAyIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzBhMzQwZGEtNWIwOC05ZjRiLThlN2It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"
              />
            </defs>
          </svg>

          <span className="font-publica text-4xl flex justify-center items-center">
            shodh
          </span>
        </Link>
      </div>
      <div className="w-1/3  rounded-full border-dashed border border-black hover:border-solid hover:border-black/30 py-2 px-4">
        <label className="h-full flex items-center gap-6">
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <line
              y1="-0.75"
              x2="9.53831"
              y2="-0.75"
              transform="matrix(0.692858 0.721074 -0.692858 0.721074 12.3912 15.4751)"
              stroke="black"
              stroke-width="1.5"
            />
            <circle
              cx="8.38236"
              cy="8.38236"
              r="7.63236"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>

          <input
            className="text-black placeholder:text-black/50 outline-none font-pSans text-xl  w-full "
            placeholder="Search any research paper"
          />
        </label>
      </div>
      {!loggedIn ? (
        <>
          <div className="py-3 px-8 border rounded-full bg-black text-white">
            <span className="" onClick={requestAccount}>
              Connect to Wallet
            </span>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className=" flex items-center justify-evenly text-lg w-1/3 ">
            <Link to="/profile">
              <span className="">User</span>
            </Link>
            <Link to="/validator">
              <span className=""> Profile</span>
            </Link>
            <div className="py-3 px-8 border rounded-full border-black hover:bg-black hover:text-white">
              <Link to="/validate">
                {" "}
                <span className="">Validate</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
