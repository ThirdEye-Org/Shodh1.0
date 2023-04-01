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
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};

/**address of verifierNFT Contract : 0x28Bb85f8103C7B27DA9d21DC98d5537C5Af42483
address of researchPaperContract Contract : 0xF040770EA2b58aad7590041c478E4BB01eFeAcdd
address of shoodhContract Contract : 0xf26fD86681FE837ffD9a495Ee72Bcd89b69e5dD5 */
