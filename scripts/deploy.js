const hre = require("hardhat");

async function main() {
  const verifierContractFactory = await hre.ethers.getContractFactory(
    "VerifierNFT"
  );
  const verifierContract = await verifierContractFactory.deploy();

  await verifierContract.deployed();
  const researchPaperContractFactory = await hre.ethers.getContractFactory(
    "ResearchPaper"
  );
  const researchPaperContract = await researchPaperContractFactory.deploy();

  await researchPaperContract.deployed();
  const shoodhContractFactory = await hre.ethers.getContractFactory("Shoodh");
  const shoodhContract = await shoodhContractFactory.deploy(
    verifierContract.address,
    researchPaperContract.address
  );

  await shoodhContract.deployed();

  console.log("address of verifierNFT Contract :", verifierContract.address);
  console.log(
    "address of researchPaperContract Contract :",
    researchPaperContract.address
  );
  console.log("address of shoodhContract Contract :", shoodhContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
