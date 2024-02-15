// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {hre, network} = require("hardhat");
const verify = require("../utils/verify.js");

async function main() {
  const chainId = network.config.chainId;
  const truee = chainId == 31337;

  const lock = await hre.ethers.deployContract("Lock", []);

  await lock.waitForDeployment();

  console.log(
    `deployed to ${lock.target}`
  );

  if(!truee) {
    await verify(lock.target, []);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
