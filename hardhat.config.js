require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  paths: {
    artifacts: "./src",
  },
  networks: {
    zkEVM: {
      url: `https://rpc.public.zkevm-test.net`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};

/**address of verifierNFT Contract : 0xED21b1AbbfC45C0ed89fd977f0497ea8B0f522Bc
address of researchPaperContract Contract : 0x5f7d6843cd2455BD49C2edc764B220bb59f408c0
address of shoodhContract Contract : 0xAe90Ad505E70Ae0388FF1CEb88B0A92F4568cF47 */
