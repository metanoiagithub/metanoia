const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

const prompt = require('prompt-sync')();

async function main() {
    const contractAddress = prompt('Address of deployed contract: ');
    // Verify the contract after deploying
    await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments: [],
    });
}

// Call the main function and catch if there is any error
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});