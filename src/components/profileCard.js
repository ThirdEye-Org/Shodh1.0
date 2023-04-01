import React from "react";
import logo from "./assets/icon.png";
import assetsOwned1 from "./assets/assetsOwned1.png";
import assetsOwned2 from "./assets/assetsOwned2.png";
import assetsOwned3 from "./assets/assetsOwned3.png";
import profileback from "./assets/profileback.jpeg";
import tokenLogo from "./assets/tokenLogo.png";
import blueTick from "./assets/blueTick.svg";
import { contractContext } from "../App";
import {useNavigate} from "react-router-dom"
// const web3 = require('web3')

function ProfileCard() {
  const Navigate=useNavigate()
  // const { account,contract ,web3Api} = useContext(userContext);
  // const [tokens,setTokens]=React.useState(0);
  // React.useEffect(()=>{
  //   const getTokens = async ()=>{

  //     var ans ;
  //     contract.bmtoken.methods.balanceOf(account).call().then((res)=>{
  //       // console.log(res , Math.pow(10,18))
  //       res = res / Math.pow(10,18)
  //       setTokens(res)
  //       console.log(res)
  //     });

  // }
  // getTokens();
  // },[])

  // console.log(account);

  const { account, setAccount, setLoggedIn } = React.useContext(contractContext);
  // console.log(account);
  // console.log(contracts);
  // setAccount('0x08e9CADc107893c306DFA3fc77525cAFB1116935');
  // console.log(account)
  return (
    <div className="scale-[80%] bg-white w-[612px] h-[862px] shadow-[0_4px_40px_rgba(0,0,0,0.25)] rounded-[50px] flex flex-col items-center relative ">
      <div className="absolute ">
        <img
          src={profileback}
          alt=""
          className="profileback rounded-t-[50px] "
        />
        {/* <img src={Rectangle} alt="" /> */}{" "}
        {/* <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" /> */}
      </div>
      <div className=" flex mt-10 justify-center items-center p-[10px] shadow-[0_4px_45px_rgba(0,0,0,0.2)] rounded-[43px]   h-[378px] w-[378px] z-[1] bg-white ">
        <img src={logo} alt="" className="rounded-[40px]" />
      </div>
      <div className="w-[296px] h-[47px] font-pSans text-[40px] font-bold mt-10 flex items-center justify-center">
        {account !== null &&
          account.slice(0, 4) + "..." + account.slice(28, 32)}
        {/* {accoun.slice(0,5)} */}
      </div>
      <div className=" text-2xl mt-2 ">
        {/* Either */}
        <div className="flex space-x-2">
          <img src={blueTick} alt="" />
          <span className="font-pSans italic font-medium text-[rgba(0,0,0,0.5)]">
            Validator
          </span>
        </div>
        {/* Or */}
        {/* <span className="font-pSans italic font-medium text-[rgba(0,0,0,0.5)] cursor-pointer">
         Become a Validator
        </span> */}
      </div>
      <div className="flex flex-row space-x-6 mt-16 px-2 w-[30vw] justify-center">
        <div>
          <div className="font-pSans text-xl font-light text-[rgba(0,0,0,0.5)] flex justify-center items-center">
            Researches used by
          </div>
          <div className="flex space-x-3  justify-center items-center h-[56px]">
            <div className="flex">
              <img
                src={assetsOwned1}
                className="h-[48px] w-[48px] rounded-full -mr-4 border-solid border-4 border-white z-10"
                alt=""
              />
              <img
                src={assetsOwned2}
                className="h-[48px] w-[48px] rounded-full -mr-4 border-solid border-4 border-white z-0"
                alt=""
              />
              <img
                src={assetsOwned3}
                className="h-[48px] w-[48px] rounded-full  border-solid border-4 border-white "
                alt=""
              />
            </div>
            <div className="flex text-base text-[rgba(0, 0, 0, 0.89)] justify-center items-center">
              +2
            </div>
          </div>
        </div>
        <div>
          <div className="font-pSans text-xl font-light text-[rgba(0,0,0,0.5)] flex justify-center items-center">
            verified
          </div>
          <div className="font-pSans font-bold text-[40px] flex justify-center items-center h-[56px]">
            0
          </div>
        </div>
        <div>
          <div className="font-pSans text-xl font-light text-[rgba(0,0,0,0.5)] flex justify-center items-center">
            Not verified
          </div>
          <div className="font-pSans font-bold text-[40px] flex justify-center items-center h-[56px]">
            0
          </div>
        </div>
      </div>
      <div className="w-[70%] h-[75px] flex items-center justify-center p-[20px 24px] bg-[#5A7BF3] rounded-3xl font-pSans color-white font-medium text-[30px] text-white mt-16 cursor-pointer" onClick={()=>{
        Navigate("/")
        setAccount(null);
        setLoggedIn(false);
      }}>
        log out
      </div>
    </div>
  );
}

export default ProfileCard;
