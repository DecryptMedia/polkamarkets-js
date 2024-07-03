const PredictionMarketV3Querier = artifacts.require("PredictionMarketV3Querier");
const PredictionMarketV3 = artifacts.require("PredictionMarketV3");

let { PM3_ADDRESS } = process.env;

module.exports = async function(deployer) {
  PM3_ADDRESS = PM3_ADDRESS || (await PredictionMarketV3.deployed()).address;

  await deployer.deploy(PredictionMarketV3Querier, PM3_ADDRESS);
}
