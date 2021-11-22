const UniswapV2Router02 = artifacts.require("UniswapV2Router02");

const FACTORY_ADDRESS = "0xd3030bc02204477d6b453be95e9c3548089a214a"
const WRAPPED_ETH = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"

module.exports = async (deployer) => {
  await deployer.deploy(UniswapV2Router02, FACTORY_ADDRESS, WRAPPED_ETH);
};