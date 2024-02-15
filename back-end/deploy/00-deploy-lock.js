const { network } = require("hardhat");
const {verify} = require("../utils/verify.js");


module.exports = async ({getNamedAccounts, deployments}) => {
    const {deployer} = await getNamedAccounts();
    const {deploy, log} = deployments;
    const chainId = network.config.chainId;

    log("---------------- deploying lock -----------------");

    const lock = await deploy("Lock", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: network.config.blockConfirmations || 1,
    });

    if(chainId != 31337){
        log("--------------- verifying pls wait ----------------");
        await verify(lock.address, []);
    }

}