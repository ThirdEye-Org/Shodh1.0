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

/**address of verifierNFT Contract : 0x08e9CADc107893c306DFA3fc77525cAFB1116935
address of researchPaperContract Contract : 0x719974E1565d5F36606Ec2Bc56c419c9CA995345
address of shoodhContract Contract : 0xD975Bfc13f54AD4c8Ce291F5e9434374056b99c3 */
