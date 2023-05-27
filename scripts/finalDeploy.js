const hre = require("hardhat");

async function main(){
    const donate = await hre.ethers.getContractFactory("Donate2Syria")
    const contract = await donate.deploy()

    await contract.deployed();
    console.log("Address of the Contract ", contract.address)
}main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });